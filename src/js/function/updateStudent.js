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
        return await fetch(`https://68164d2232debfe95dbe0c40.mockapi.io/api/blog-project/students/${id}`, options)
    } catch (error) {
        return error
    }
}