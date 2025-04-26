// Функція для отримання всіх студентів

export const getStudents = async () => {
    try {
        return await fetch("http://localhost:3000/students").
            then(response => response.json())
    } catch (error) {
        return error
    }
}