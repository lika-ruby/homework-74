// Функція для отримання всіх студентів

export const getStudents = () => {
    return fetch("http://localhost:3000/students").
        then(response => response.json())
}