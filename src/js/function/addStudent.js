// Функція для додавання нового студента

export const addStudents = (studentToAdd) => {
    const options = {
        method: "POST",
        body: JSON.stringify(studentToAdd),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },

    };
    fetch("http://localhost:3000/students", options)
}