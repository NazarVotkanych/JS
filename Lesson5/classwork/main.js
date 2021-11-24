// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let min = (a,b,c) => {
//     if (a < b && a < c ) {
//         console.log(a)
//     } else if (b < a && b < c) {
//         console.log(b)
//     } else {
//         console.log(c)
//     }
// }
// min(10,7,15)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let max = (a,b,c) => {
//     if (a > b && a > c ) {
//         console.log(a)
//     } else if (b > a && b > c) {
//         console.log(b)
//     } else {
//         console.log(c)
//     }
// }
// max(10,7,15)
// - створити функцію яка повертає найбільше число з масиву
// let array1 = [100,150,200,50000 ,300,500,10000]
// let array = (arrays) => {
//     let max = arrays[0]
//     for (let i = 0; i < arrays.length; i++) {
//         if (arrays[i] > max) {
//             max = arrays[i]
//         }
//     }
//     return max
// }
// let number = array(array1)
// console.log(number)
// - створити функцію яка повертає найменьше число з масиву
// let array1 = [100,150,200,300,500,]
// let array = (arrays) => {
//     let min = arrays[0]
//     for (let i = 0; i < arrays.length; i++) {
//         if (arrays[i] < min) {
//             min = arrays[i]
//         }
//     }
//     return min
// }
// let number = array(array1)
// console.log(number);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let array = [1,2,10]
// let sum = (limit) => {
//     let sumArray = limit.reduce((acc, num) => acc + num, 0)
//     return sumArray
// }
// sum(array)
// console.log(sum(array));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array = [1,2,10]
// let sum = (limit) => {
//     let sumArray = limit.reduce((acc, num) => acc + num, 0)
//     return sumArray/limit.length
// }
// sum(array)
// console.log(sum(array));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let array = [10,20,30,60,4,80,20,30,46,50];
// let num = (limit) => {
//     let min = limit[0]
//     let max = limit[0]
//
//     for (let i = 0; i < limit.length; i++) {
//         if (limit[i] < min) {
//             min = limit[i]
//         }
//         if (limit[i] < min) {
//             min = limit[i]
//         }
//     }
//     console.log(max, "max");
//     return min
// }
// console.log(num(array))

// - створити функцію яка заповнює масив рандомними числами
// let array = () => {
//     let random = []
//     for (let i = 0; i < 10; i++ ) {
//         let rando = Math.round(Math.random());
//         random.push(rando)
//     }
//     return random
// }
// let num = array(20)
// console.log(num);

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let array = (limit, diapazon) => {
//     let random = []
//     for (let i = 0; i < limit; i++ ) {
//         let rando = Math.round(Math.random()*diapazon);
//         random.push(rando)
//     }
//     return random
// }
// let num = array(20,100)
// console.log(num);

// // // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let array1 = [1,2,3]
// let array = (array) => {
//     let newArr = []
//     for (let i = array.length - 1; i >= 0; i--) {
//         newArr.push(array[i])
//     }
//     return newArr
// }
// console.log(array(array1));

