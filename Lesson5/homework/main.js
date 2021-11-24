// let calc = (a, b) => a * b
// console.log(calc(10, 30));

// let calc = (p, r) => (p * (Math.pow(r,2)))
// console.log(calc(3.14, 10));

// let calc = (p, h, r) => (Math.round((2 + (p*(h + r)))))
// console.log(calc(3.14, 10, 30));
// - створити функцію яка приймає масив та виводить кожен його елемент
// array1 = [1,2,3,4,5,6,7,8,8]
// let array = (item) => {
//     for (let i = 0; i < item.length; i++){
//         console.log(item[i]);
//     }
// }
// array(array1);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let text = (texts) => document.write(`<p>${texts}</p`)
// text('Hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let list = (lists) => {
//     document.write(`<ul>`)
//     document.write(`<li>${lists}</li>`)
//     document.write(`<li>${lists}</li>`)
//     document.write(`<li>${lists}</li>`)
//     document.write(`</ul>`)
// }
// list('Hello')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let text = (liText, count) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < count; i++){
//         document.write(`<li>${liText}</li>`)
//     }
//     document.write(`</ul>`)
// }
// text('hello', 10)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// array1 = [1,2,3,'Hello','World',true,false]
// let text = (texts) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < texts.length; i++){
//         document.write(`<li>${array1[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// text(array1)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let array1 = [
//     {id: 10, name: "Nazar", age: 10, surname: "Votkanych"},
//     {id: 10, name: "Nazar", age: 10, surname: "Votkanych"},
//     {id: 10, name: "Nazar", age: 10, surname: "Votkanych"},
// ];
// let array = (arrays) => {
//     for (let i = 0; i < arrays.length; i++) {
//         document.write(`<ul>`)
//         document.write(`${arrays[i].name}${arrays[i].age}${arrays[i].id}${arrays[i].surname}`)
//         document.write(`</ul>`)
//     }
// }
// array(array1)
// let array = ["hello", 'Okten', 'World', 'yyyu', 'Okten', 'World', 'World', 'World', 'yyyu']
//
// const a = (arr, num) => {
//     const result = [];
//     let chank = []
//     for (let i = 0; i < arr.length; i++) {
//         if (chank.length <num) {
//             chank.push(arr[i])
//         }
//
//         if ( chank.length >= num || arr.length - 1  === i) {
//             result.push(chank)
//             chank = []
//         }
//     }
//     console.log(chank)
//     console.log(result)
// }
// a(array ,3)