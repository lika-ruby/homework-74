// Функція для видалення студента

export const deleteStudent = (id) => {
    fetch(`http://localhost:3000/students/${id}`, {
        method: "DELETE",
    })
}