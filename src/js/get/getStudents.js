// Функція для отримання всіх студентів

export const getStudents = async () => {
    try {
        return await fetch("https://68164d2232debfe95dbe0c40.mockapi.io/api/blog-project/students").
            then(response => response.json())
    } catch (error) {
        return error
    }
}