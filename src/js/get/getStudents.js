// Функція для отримання всіх студентів

export const getStudents = async () => {
    try {
        return await fetch("https://680dfed9c47cb8074d91bfe0.mockapi.io/api/blog-project/students").
            then(response => response.json())
    } catch (error) {
        return error
    }
}