// Даны два целых числа A и В (каждое в отдельной строке).
// Выведите все числа от A до B включительно, в порядке возрастания,
//     если A < B, или в порядке убывания в противном случае.
let numA = 1
let numB = 20

function reCall(a, b) {
    if (a < b) {
        for (let i = a; i < b; i++) {

        }
    } else {
        for (let i = b; i < a; i++) {

        }
    }
}

reCall(numA, numB)
//
// let numA = 100
// let numB = 60
//
// function reCall(a, b)  {
//     if (a > b) {
//         console.log(a)
//
//         reCall(--a, b++)
//     }
//
//    if (a < b) {
//        console.log(a)
//        reCall(++a, b--)
//    }
//
// }
//
// reCall(numA, numB);