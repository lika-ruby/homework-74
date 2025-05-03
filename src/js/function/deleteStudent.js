// Функція для видалення студента

export const deleteStudent = async (id) => {
    try {
        return await fetch(`https://68164d2232debfe95dbe0c40.mockapi.io/api/blog-project/students/${id}`, {
            method: "DELETE",
        })
    } catch (error) {
        return error
    }
}