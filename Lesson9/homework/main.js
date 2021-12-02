// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// //
// let block = document.createElement('div');
// block.innerText = 'Hello World';
// block.classList.add('wrap', 'collapse', 'alpha', 'beta');
// document.body.appendChild(block.cloneNode(true));
// document.body.appendChild(block.cloneNode(true));
//


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let array = ['Main','Products','About us','Contacts']
// for (const arra of array) {
//     let liElement = document.createElement('li');
//     let menus = document.getElementsByClassName('menu')
//     menus[0].appendChild(liElement);
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// for (const languages of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.innerText = languages.title + ' ' + languages.monthDuration;
//     let menus = document.getElementsByClassName('menu')
//     menus[0].appendChild(divElement);
//
// }
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const languages of coursesAndDurationArray) {
    let divElement = document.createElement('div');
    divElement.classList.add('item');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    h1.innerText = `${languages.title}`
    p.innerText = `${languages.monthDuration}`
    divElement.appendChild(h1);
    divElement.appendChild(p);
    let menus = document.getElementsByClassName('menu')
    menus[0].appendChild(divElement);
}