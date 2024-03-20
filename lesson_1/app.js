// // // Regular expressions - Регулярные выражения
// //
// //
// // // const name = prompt('введите ваше имя')
// // //
// // // const regExp = /D/ig
// // //
// // // console.log(name, '=>',name.match(regExp))
// // const symbols = 'AaaBbbCcc'
// //
// // const regExp = /c/gi
// // // const regExp = new RegExp('c', 'gi')
// //
// // console.dir(regExp)
// // // console.log(symbols.match(regExp))
//
// const numbers = "123_qwe_123QWE_123!@#$%^&*()-=+"
//
// // const regExp = /[0-9]/g
// // const regExp = /\d/g
// // const regExp = /[0-9a-zA-Z_]/g
// const regExp = /[\w\W]/g
// // const regExp = /\D/g все кроме цифр
//
//
// console.log(numbers.replace(regExp, '*'))
//


//Recursion - Рекурсия
let count = 0
const recursionCount = () => {
    count++
    console.log(count)

    if (count < 500){
        recursionCount()
    } else {
        console.log('все конец! парапарапам')
    }

}
recursionCount()