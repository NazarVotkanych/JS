// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world'
// console.log(str.length);
//
// let str1 = 'lorem ipsum'
// console.log(str1.length);
//
// let str2 = 'javascript is cool'
// console.log(str2.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world'
// let toUpperCase = str.toUpperCase();
// console.log(toUpperCase);
// let str1 =  'lorem ipsum'
// let toUpperCase = str1.toUpperCase();
// console.log(toUpperCase);
// let str2 = 'javascript is cool'
// let toUpperCase = str2.toUpperCase();
// console.log(toUpperCase);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str = 'HELLO WORLD'
// let toLowerCase = str.toLowerCase();
// console.log(toLowerCase);

// let str1 = 'LOREM IPSUM'
// let toLowerCase = str1.toLowerCase();
// console.log(toLowerCase);
// let str2 = 'JAVASCRIPT IS COOL'
// let toLowerCase = str2.toLowerCase();
// console.log(toLowerCase);
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   '
// console.log(str.length);
// let trim = str.trim()
// console.log(trim);
// console.log(trim.length);
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
// let str = 'Каждый охотник желает знать';
// let split = str.split(' ')
// console.log(split);
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
// let slice = str.slice(0,6);
// console.log(slice);

//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let replaceAll = str.replaceAll(' ', '-').toUpperCase();
// console.log(replaceAll);
// let str = "HTML JavaScript PHP";
// let replaceAll = () => {


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = "HTML javaScript PHP";
// let arr = str.split(' ')
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
//     arr[i] = arr[i][0].toLowerCase() + arr[i].slice(1)
// }
// let str1 = arr.join(" ");
// console.log(str1);


//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = "hTML javaScript PHP";
// const capitalize = (str) => str.split(' ').map(([first, ...rest]) => first.toUpperCase() + rest.join('')).join(' ')
//
// console.log(capitalize(str));

