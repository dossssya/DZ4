// const button = document.getElementById('btn')
// console.log(button)

// const button = document.getElementsByClassName('button')
// const array = [1,2,3,4]
// console.log(array)
// console.log(button)
//
// const buttons = document.getElementsByTagName('button')
// console.log(buttons)


const btnParent = document.querySelector('.btn-block')
const buttons = document.querySelectorAll('button')

// classlist, add() remove() contains()

// buttons[0].classList.add('red', 'blue')
// buttons[0].classList.remove('red')
// buttons.forEach((button) => {
//     button.onclick = (event) => {
//         if (event.target.classList.contains('red')) {
//             event.target.classList.remove('red')
//         } else {
//             event.target.classList.add('red')
//         }
//     }
// })

btnParent.onclick = (event) => {
    if (event.target.tagName.toLowerCase() === 'button'){
        event.target.onclick = () => {
            if (event.target.classList.contains('red')) {
                event.target.classList.remove('red')
            } else {
                event.target.classList.add('red')
            }
        }
    }
}

