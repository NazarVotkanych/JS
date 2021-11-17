// let array = [10,22,33,44,55];
//
// for (let i = 0; i < 5; i++) {
//     document.write(`<div>${array[i]} </div>`);
// }

// let array = ['One','Two','three','Four','Five'];
//
// for (let i = 0; i < array.length; i++) {
//     document.write(`<div>${array[i]} </div>`);
// }

// let array = [10,22,33,44,55];
// console.log(array);

// let array = ['One','Two','three','Four','Five'];
// console.log(array);


// let array = ['One',1,true,];
// console.log(array);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let array = [];
// array[0] = 'One';
// array[1] = 'two';
// array[2] = 'Three';
// console.log(array);

// for (let i =0; i < 10; i++) {
//     document.write(`<div> довільним текстом всередині</div>`)
// }
// for (let i =1; i < 11; i++) {
//     document.write(`<div> довільним текстом ${i}  всередині</div>`)
// }

// let i = 1;
// while (i<11) {
//     document.write(`<h1> довільним текстом всередині</h1>`)
//     i++;
// }

// let i = 1;
// while (i<11) {
//     document.write(`<h1>${i} довільним текстом всередині</h1>`)
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let array = [1,2,2,3,3,3,3,4,4,4];
// for (let i = 0; i < 10; i++) {
//     console.log(array[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let array = ['String','String1','String2','String3','String4','String5','String6','String7','String8','String9','String10'];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let array = ['String','String1',1,true,3,false,5,true,10000,'String9','String10'];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let array = ['String','String1',1,true,3,false,5,true,10000,'String9','String10'];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'boolean')
//     console.log(array[i]);
// }
// console.log(array);

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let array = ['String','String1',1,true,3,false,5,true,10000,'String9','String10'];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number')
//         console.log(array[i]);
// }
// console.log(array);
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let array = ['String','String1',1,true,3,false,5,true,10000,'String9','String10'];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'string')
//         console.log(array[i]);
// }
// console.log(array);
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array = [];
// array[0] = 'One';
// array[1] = true;
// array[2] = 5000;
// array[3] = 4666;
// array[4] = 'two';
// array[5] = 'threee';
// array[6] = false;
// array[7] = 55;
// array[8] = 'Hello';
// for (let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++){
//     console.log(`крок -`, [i]);
//     document.write(`крок -, ${i} </br>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++){
//     console.log(`крок -`, [i]);
//     document.write(`крок -, ${i} </br>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2){
//     console.log(`крок -`, [i]);
//     document.write(`крок -, ${i} </br>`)
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++){
//     if ([i] %2 ===0)
//         document.write(`<div>`);
//     console.log(`крок -`, [i]);
//     document.write(`<div> крок -, ${i} </div>`)
//     document.write(`</div>`);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 10; i++){
//     if (!([i] %2 ===0))
//     console.log(`крок -`, [i]);
//     document.write(`${i}<br>`)
// }