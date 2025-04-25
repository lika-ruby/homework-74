// Функція для відображення студентів у таблиці

export const renderStudents = (students) => {
    let studentsList = ''
    students.map(st => {
        studentsList +=
            `<tr id="${st.id}">
                <td>${st.id}</td>
                <td>${st.name}</td>
                <td>${st.age}</td>
                <td>${st.course}</td>
                <td>
                    <ul>
                    ${renderList(st.skills)}
                    </ul>
                </td>
                <td>${st.email}</td>
                <td>${isChecked(st.isEnrolled)}</td>
                <td> 
                    <button id="change" class="change">Змінити</button>
                    <button id="delete" class="delete">Видалити</button>
                </td>
            </tr>`

    })
    return studentsList
}

const renderList = (skills) => {
    let skillsList = ''
    skills.map(sk => {
        skillsList +=
            `<li>
                ${sk}
            </li>`

    })

    return skillsList
}

const isChecked = (chexbox) => {
    if (chexbox) {
        return "Записаний"
    } else {
        return "Не записаний"
    }
}