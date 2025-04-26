import { getStudents } from "./get/getStudents";
import { renderStudents } from "./markup/renderStudents";
import { addStudents } from "./function/addStudent";
import { updateStudent } from "./function/updateStudent";
import { deleteStudent } from "./function/deleteStudent";
import { openModal } from "./modal/open-modal";

const getStudentsBtn = document.querySelector("#get-students-btn")
const addStudentBtn = document.querySelector("#add-student-btn")
const closeBtn = document.querySelector("#close-btn")
const tBodyElem = document.querySelector("tbody")
const addNameInput = document.querySelector("#name")
const addAgeInput = document.querySelector("#age")
const addCourseInput = document.querySelector("#course")
const addSkillsInput = document.querySelector("#skills")
const addEmailInput = document.querySelector("#email")
const addChexboxInput = document.querySelector("#checkbox")

const addNameInputModal = document.querySelector("#name-c")
const addAgeInputModal = document.querySelector("#age-c")
const addCourseInputModal = document.querySelector("#course-c")
const addSkillsInputModal = document.querySelector("#skills-c")
const addEmailInputModal = document.querySelector("#email-c")
const addChexboxInputModal = document.querySelector("#checkbox-c")
const backdrop = document.querySelector(".backdrop")
const addStudentBtnModal = document.querySelector("#add-student-btn-c")


getStudentsBtn.addEventListener("click", async () => {

    await getStudents().then((students) => {
        tBodyElem.innerHTML = renderStudents(students)
    })

})

addStudentBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    const student = {
        name: addNameInput.value,
        age: Number.parseInt(addAgeInput.value),
        course: addCourseInput.value,
        skills: addSkillsInput.value.split(","),
        email: addEmailInput.value,
        isEnrolled: addChexboxInput.checked
    }
    await addStudents(student)
    await getStudents().then((students) => {
        tBodyElem.innerHTML = renderStudents(students)
    })
    addNameInput.value = ""
    addAgeInput.value = ""
    addCourseInput.value = ""
    addSkillsInput.value = ""
    addEmailInput.value = ""
    addChexboxInput.checked = false
})


tBodyElem.addEventListener("click", async (e) => {
    e.preventDefault()
    if (e.target.id === "change") {
        backdrop.classList.remove("is-hidden")
        await getStudents().then((students) => {
            openModal(backdrop, e, students, addNameInputModal, addAgeInputModal, addCourseInputModal, addSkillsInputModal, addEmailInputModal, addChexboxInputModal)

        })

    }
    if (e.target.id === "delete") {
        const id = e.target.parentNode.parentNode.firstElementChild.textContent
        await deleteStudent(id)
        await getStudents().then((students) => {
            tBodyElem.innerHTML = renderStudents(students)
        })
    }

})


closeBtn.addEventListener("click", () => {
    backdrop.classList.add("is-hidden");
});


addStudentBtnModal.addEventListener("click", async (e) => {
    e.preventDefault()
    const id = backdrop.id
    const student = {
        name: addNameInputModal.value,
        age: Number.parseInt(addAgeInputModal.value),
        course: addCourseInputModal.value,
        skills: addSkillsInputModal.value.split(","),
        email: addEmailInputModal.value,
        isEnrolled: addChexboxInputModal.checked
    }
    await updateStudent(id, student)
    await getStudents().then((students) => {
        tBodyElem.innerHTML = renderStudents(students)
    })
    backdrop.classList.add("is-hidden");
})