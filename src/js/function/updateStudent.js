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
        return await fetch(`http://localhost:3000/students/${id}`, options)
    } catch (error) {
        return error
    }
}