// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min(a,b,c) {
//     if (a < b && a < c){
//         console.log(a)
//     } else if (b < a && b < c) {
//         console.log(b)
//     } else {
//         console.log(c);
//
//     }
// }
// min(10,5,15);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max(a,b,c) {
//     if (a > b && a > c){
//         console.log(a)
//     } else if (b > a && b > c) {
//         console.log(b)
//     } else {
//         console.log(c);
//
//     }
// }
// max(100,2,600);
// - створити функцію яка повертає найбільше число з масиву
// let array = [10,20,30,60,4,80,20,30,46,50];
// function num(limit) {
//     let min = limit[0]
//     let max = limit[0]
//
//     for (let i = 0; i < limit.length; i++) {
//         if (limit[i] < min){
//             min = limit[i]
//         }
//         if (limit[i] > max){
//             max = limit[i]
//         }
//     }
//
//     return {min, max}
// }
// const numbers = num(array)
// console.log(numbers)
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [10,20,30,60,4,80,20,30,46,50];
// function sum (limit) {
//     let sumArray = limit.reduce((acc, num) => acc + num, 0)
//
//     return sumArray
// }
//
// sum(array)
// console.log(sum(array));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array = [10,20,30,60,4,80,20,30,46,50];
// function sum (limit) {
//     let sumArray = limit.reduce((acc, num) => acc + num, 0)
//
//     return sumArray/limit.length
// }
//
// sum(array)
// console.log(sum(array));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let array = [10,20,30,60,4,80,20,30,46,50];
//
// function num(limit) {
//     let min = limit[0]
//     let max = limit[0]
//
//     for (let i = 0; i < limit.length; i++) {
//         if (limit[i] < min){
//             min = limit[i]
//         }
//         if (limit[i] > max){
//             max = limit[i]
//         }
//     }
//
//     console.log(max, "max");
//     return min
// }
//
// console.log(num(array));

// - створити функцію яка заповнює масив рандомними числами

// function random(limit, diapazon) {
//     let array = []
//
//     for (let i = 0; i < limit; i++) {
//         let ran = Math.round(Math.random() * diapazon);
//         array.push(ran);
//     }
//     return array
// }
//
// const qwe = random(10,100)
// console.log(qwe)

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function random(limit, diapazon) {
//     let array = []
//
//     for (let i = 0; i < limit; i++) {
//         let ran = Math.round(Math.random() * diapazon);
//         array.push(ran);
//     }
//     return array
// }
//
// const qwe = random(10,100)
// console.log(qwe)
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let array1 = [1,3]
// let array = [10, 20, 30, 60, 4, 80, 20, 30, 46, 50];
//
// function reverse(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         array1.push(array[i])
//     }
// }
//
// reverse(array);
// console.log(array1)