// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// if (friends.length > 3 || friends.length ===3) {
//     console.log('Це великий масив в якому  3 і більше елементи!')
// } else {
//     console.log('Це маленький масив, в якому менше 3-х елементів.')
// }

// let num = [5,40,6]
// console.log(num[1]);
// let num = [5,40,6];
// let result = num[Math.floor(num.length/2)];
// console.log(result)
// let num = [5,40,6];
// let result = num[Math.round((num.length - 1)/2)];
// console.log(result)


// let num = [5,40,6];
// let result =  (num) => num.reduce((a, b) => a + b) / num.length;
// console.log(result([5,40,6]));

// const average = (array) => array.reduce((a, b) => a + b) / array.length;
// console.log(average([1,2,3,4,5]));
//
//
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
// let a = 5;
// let b = 6;
// let result = a + b < 4 ? 'Мало':'Багато';
// console.log(result);


// let num = 0;
// if (num >= -100 && num <= -1) {
//     console.log('Негативне число')
// } if (num === 0) {
//     console.log('Нуль')
// } if (num >= 1 && num <= 100) {
//     console.log('Позитивне число')
// }


//
// let first = 10;
// let second = 20;
// let third = 30;
// if (first < second && third > second) {
//     console.log(second);
// } else {
//     console.log(first);
// }

let num = [1000, 150,50,100, 500];
num.sort (function (a, b) {
   return a - b;
});
let result = num[Math.floor(num.length/2)];
console.log(result)
// console.log(num);
// console.log(num[2]);
