// Функція для видалення студента

export const deleteStudent = async (id) => {
    try {
        return await fetch(`https://680dfed9c47cb8074d91bfe0.mockapi.io/api/blog-project/students/${id}`, {
            method: "DELETE",
        })
    } catch (error) {
        return error
    }
}