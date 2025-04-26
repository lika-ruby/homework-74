// Функція для додавання нового студента

export const addStudents = async (studentToAdd) => {
    const options = {
        method: "POST",
        body: JSON.stringify(studentToAdd),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },

    };
    try {
        return await fetch("http://localhost:3000/students", options)
    } catch (error) {
        return error
    }
}