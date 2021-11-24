// function pram(a, b) {
//    let res = a * b;
//     return res
// }
// let result = pram(15,16);
// console.log(result);

// function radious(r) {
//     let res = (3.14 * (Math.pow( r,2)));
//     return res
//
// }
// let result = radious(10);
// console.log(result);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function radious(h,r) {
//     let p = 3.14;
//     let res =Math.round((2 + (p*(h + r))));
//     return res
//
// }
// let result = radious(22,10);
// console.log(result);

// - створити функцію яка приймає масив та виводить кожен його елемент
//
// function array(limit) {
//     for (let i = 0; i < limit.length; i++) {
//         console.log(limit[i]);
//     }
// }
//
// array(array1);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function text(texts) {
//     document.write(`<p>${texts}</p>`)
//
// }
// text("Hello")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function text(liText) {
//     document.write(`<ul>`)
//     document.write(`<li>${liText}</li>`)
//     document.write(`<li>${liText}</li>`)
//     document.write(`<li>${liText}</li>`)
//     document.write(`</ul>`)
// }
// text('Product');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function text(liText, count) {
//     document.write(`<ul>`)
//     for (let i = 0; i < (count || 3); i++){
//         document.write(`<li>${liText}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
// text('Hello', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function list(count) {
//     document.write(`<ul>`)
//     for (let i = 0;i < count.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ul>`)
// }
// list(array)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let array = [
//     {id: 10, name: "Nazar", age: 10, surname: "Votkanych"},
//     {id: 10, name: "Nazar", age: 10, surname: "Votkanych"},
//     {id: 10, name: "Nazar", age: 10, surname: "Votkanych"},
// ];
//
// function obj(limit) {
//     document.write(`<div>`)
//     for (let i = 0; i < limit.length; i++) {
//         document.write(`<div>`)
//         document.write(`${limit[i].name} ${limit[i].id} ${limit[i].age} ${limit[i].surname}`);
//         document.write(`</div>`)
//     }
//     document.write(`</div>`)
// }
// obj(array)