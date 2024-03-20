// // JSON JavaScript object notation
//
//
// const user = {
//     name: 'Nurdin',
//     age: 20
// }
//
// console.log(user)
//
// const json = JSON.stringify(user)
// console.log(json)
// console.log(JSON.parse(json))


// Клиент-серверное взаимодействие

// AJAX - Asynchronous JavaScript and XML

// XHR = XML Http Request

const btn = document.querySelector('.btn')
btn.onclick = () => {
    const request = new XMLHttpRequest() // создание запроса
    request.open("GET","data.json") // Указание метода запроса и пути
    request.setRequestHeader("Content-type","application/json") // указание заголовка
    request.send() // отправка запроса
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        document.querySelector('.name').innerHTML = data.name
        document.querySelector('.age').innerHTML = data.age
    })
}