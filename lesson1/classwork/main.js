// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
// let arr = [0,2,5,6,4,7,51,12,10,12];
//    let result = 0;
//
//    for (let i = 0; arr.length > i; i++) {
//        result += arr[i]
//        console.log(result, `iteration ${i}`);
//
//    }
//
// console.log(result, 'hjvkjbj');


// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
// let book = {
//     name:'назва',
//     number:'кількість сторінок',
//     genre:'жанр'
// };
// // 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
// let book = {назва, кількість сторінок,жанр, автори};
// let book = {
// //     name:'назва',
// //     number:'кількість сторінок',
// //     genre:'жанр',
//     author: 'peter'
// }
// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
// let books =[
//     {
//         name:'Pen',
//         number:48,
//         genre:'drama',
//         author:'Peter'
//     },
//     {
//         name:'Pen',
//         number:48,
//         genre:'drama',
//         author:'Peter'
//     }
// ]
//     console.log(books[0].name);




// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
// let a = {
//     height:23,
//     width:10
// }
// let sum = a.height*a.width;
// console.log(sum);
// // 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// // // результат помістіть у змінну v.
// let c = {
//     height: 10,
//     r: 4 / 2,
//     p: 3.14,
// }
// console.log(c.r);
// let rkv = c.r** 2 ;
// let obj = c.p * rkv * c.height;
// console.log(obj);
// // 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
// let sum = {
//     n:3,
//     m:4
// }
// let result = Math.sqrt(Math.pow(sum.n, 2) + Math.pow(sum.m, 2));
// console.log(result);

// С помощью prompt записать переменные a,b,c,d.
// a = 10
// b = 20
// c = 15
// d =40
// С их помощью найти :
//     1. Площадь трапеции
// 2. Высоту трапеции
// 3. Среднюю линию трапеции.
//     Результат вывести в консоле, алертом, и в документе.  ( не использовать библеотеку Math)
// периметр

// let sum = {
//     a: prompt('a?'),
//     b:prompt('what is b?'),
//     h:prompt('what is h?')
// }
// let par = (sum.a+sum.b)/2;
// let result = (par*sum.h);
// console.log(result);
// alert(result);
// document.write(result);

// 2. Высоту трапеции
// let sum = {
//     a:prompt('what is a?'),
//     b:prompt('what is b?'),
//     c:prompt('what is c?')
// }
// let ab = (sum.a - sum.b)** 2;
// let four = (sum.c**2) - (ab/4);
// let result = Math.sqrt(four);
// console.log(result);


