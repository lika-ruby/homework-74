// Функція для видалення студента

export const deleteStudent = async (id) => {
    try {
        return await fetch(`http://localhost:3000/students/${id}`, {
            method: "DELETE",
        })
    } catch (error) {
        return error
    }
}