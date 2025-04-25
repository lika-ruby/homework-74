// Функція для оновлення студента

export const updateStudent = (id, studentToUpdate) => {

    const options = {
        method: "PUT",
        body: JSON.stringify(studentToUpdate),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };
    fetch(`http://localhost:3000/students/${id}`, options)

}