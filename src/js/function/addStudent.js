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
        return await fetch("https://68164d2232debfe95dbe0c40.mockapi.io/api/blog-project/students", options)
    } catch (error) {
        return error
    }
}