// Функція для оновлення студента

export const updateStudent = async (id, studentToUpdate) => {

    const options = {
        method: "PUT",
        body: JSON.stringify(studentToUpdate),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };
    try {
        return await fetch(`https://680dfed9c47cb8074d91bfe0.mockapi.io/api/blog-project/students/${id}`, options)
    } catch (error) {
        return error
    }
}