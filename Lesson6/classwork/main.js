// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

//
// let n1 = 'Harry..Potter'
// let replaceAll = n1.replaceAll('.',' ')
// console.log(replaceAll);
// let n2 = 'Ron---Whisley'
// let replaceAll = n2.replaceAll('-',' ')
// console.log(replaceAll);
// let n3 = 'Hermione__Granger'
// let replaceAll = n3.replaceAll('_',' ')
// console.log(replaceAll);
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// function random(amount, max) {
//     let empty = []
//     for (let i = 0; i < amount; i++) {
//         empty.push(Math.floor(Math.random() * max))
//     }
//     return empty
// }
//
// console.log(random(10, 100));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// function random(amount, max) {
//     let empty = []
//     for (let i = 0; i < amount; i++) {
//         empty.push(Math.floor(Math.random() * max))
//     }
//     return empty.sort((a1,a2) => {
//         return a1 - a2;
//     })
// }
// console.log(random(10, 100));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// function random(amount, max) {
//     let empty = []
//     for (let i = 0; i < amount; i++) {
//         empty.push(Math.floor(Math.random() * max))
//     }
//     return empty.filter(value => {
//         return value % 2 === 0;
//     })
//
// }
// console.log(random(10, 100));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// function random(amount, max) {
//     let empty = []
//     for (let i = 0; i < amount; i++) {
//         empty.push(Math.floor(Math.random() * max))
//     }
//     console.log(empty);
//     const newArr = empty.map((value) => value.toString());
//
//     return newArr;
//
// }
// console.log(random(10, 100));
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// let nums = [11,21,3];
// const sortNums = (direction, arr) => {
//     if (direction === "more") {
//        return  arr.sort((a, b) => a - b)
//     }
//     if (direction === "less") {
//        return  arr.sort((a, b) => b - a)
//     }
//
//     return null
// }
//
// let sortArr = sortNums("more", nums)
// console.log(sortArr);
// let sort = nums.sort((a1,a2) => {
//     return a1 - a2
// })
// console.log(sort);
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sort = coursesAndDurationArray.sort((a1, a2) => {
//     return a1.monthDuration - a2.monthDuration
// })
// console.log(sort);
// let filter = coursesAndDurationArray.filter(value => {
//     if (value.monthDuration >= 5){
//         return true
//     }
// })
// console.log(filter);

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// const cutString = (str, n) => {
//   let empty = []
//     for (let i = 0; i < str.length; i+=n) {
//         empty.push(str.slice(i,i+n))
//     }
//     return empty
// }
// let newEmpt = cutString('HelloWorld',2)
// console.log(newEmpt);