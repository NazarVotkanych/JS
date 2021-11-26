// - Дано натуральное число n. Выведите все числа от 1 до n.

// let n = 15
// let array = (limit) => {
//     for (let i = 1; i <= limit; i++){
//         console.log(i)
//     }
// }
// array(n)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// const array = (a, b) => {
//     if (b < a) {
//         for (let i = b; i <= a; i++) {
//             console.log(i)
//         }
//     } else if (b > a) {
//         for (let i = a; i <= b; i++) {
//             console.log(i)
//         }
//     }
// }
// array(55,10)
//
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
let foo = [9,8,0,4]
const sortArr = (array, iterator) => {
  let num1 = array[iterator]
    array[iterator] = array[iterator + 1]
    array[iterator + 1] = num1
    console.log(array);
}
sortArr(foo, 1)
// const sortArr = (array, iterator) => {
//     let num1 = array[iterator]
//     array[iterator] = array[iterator + 1]
//     array[iterator+1] = num1
//     console.log(array);
// }

//sortArr(foo, 2)

// const sortArr = (array, iterator) => {
//     let num1;
//     for (let i = 0; i < array.length; i++){
//         if (i === iterator) {
//             num1 = array[i]
//             array[i] = array[i + 1]
//             array[i+1] = num1
//         }
//     }
//     console.log(array);
// }
//
// sortArr(foo, 0)
//

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


// let foo = [0,1,2,3,4]
// const sortArr = (arrays) => {
//   let zeroArr = []
//     let rando = []
//     for (let i = 0; i < arrays.length; i++){
//         if (arrays[i] === 0){
//             zeroArr.push(arrays[i])
//         } else rando.push(arrays[i])
//     }
//     return rando.concat(zeroArr)
// }
// console.log(sortArr(foo));
// const sortArr = (arrays) => {
//     let zeroArr = []
//     let numArr = []
//     for (let i = 0; i < arrays.length; i++){
//         if (arrays[i] === 0) {
//             zeroArr.push(arrays[i])
//         } else numArr.push(arrays[i])
//     }
//     return numArr.concat(zeroArr)
// }
// console.log(sortArr(foo));


// через цикл
// let n = 15;
// let num = (limit) => {
//     for (let i = 1; i <= limit ; i++) {
//         console.log(i);
//     }
// }
// num(n)


// const compareValues = (a ,b) => {
//     if (b < a) {
//         for (let i = b; i <= a; i++) {
//             console.log(i);
//         }
//     } else if (b > a) {
//         for (let i = a; i <= b; i++ ) {
//             console.log(i)
//         }
//     }
// }
// compareValues(19,15)