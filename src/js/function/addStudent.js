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
        return await fetch("https://680dfed9c47cb8074d91bfe0.mockapi.io/api/blog-project/students", options)
    } catch (error) {
        return error
    }
}