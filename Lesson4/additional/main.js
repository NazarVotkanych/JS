// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// //
// function func(item1, item2) {
//     let result = 0
//
//     if (item1 && item2){
//         result = item1 + item2
//     } else {
//         result = item1
//     }
//     return result
// }
// let sum = func(7,2);
// console.log(sum);

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// let array = [1, 2, 3, 4];
// let array1 = [2, 3, 4, 5]
//
// function funcSum(array, array1) {
//     let mas = [];
//     for (let i = 0; i < array.length; i++) {
//         let sum = array[i] + array1[i];
//         mas.push(sum)
//     }
//     return mas
// }
//
// let sumMas = funcSum(array1, array);
// console.log(sumMas)
// //
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let array = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// function gather(item) {
//     let array1 = [];
//     for (const arra of item) {
//         for (const key in arra){
//             array1.push(key);
//
//         }
//     }
//     return array1
// }
// let sumArr =gather(array);
// console.log(sumArr);
// let array = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// function gather(item) {
//     let array1 = [];
//     for (const arra of item) {
//         array1.push(...Object.keys(arra))
//     }
//     return array1
// }
// let sumArr =gather(array);
// console.log(sumArr);
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function gather(item) {
//     let array1 = [];
//     for (const arra of item) {
//         for (const key in arra){
//             array1.push(arra[key]);
//
//         }
//     }
//     return array1
// }
// let sumArr =gather(array);
// console.log(sumArr);