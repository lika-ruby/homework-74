export const openModal = (backdrop, e, students, nameElem, ageElem, courseElem, skillsElem, emailElem, checkboxElem) => {

    const rowElem = e.target.closest("tr");
    students.map((student) => {
        if (String(student.id) === rowElem.id) {
            backdrop.id = student.id
            nameElem.value = student.name
            ageElem.value = student.age
            courseElem.value = student.course
            skillsElem.value = student.skills.join(', ')
            emailElem.value = student.email
            checkboxElem.checked = student.isEnrolled
        }
    }
    )

}
