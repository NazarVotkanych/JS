// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// b) робить шириниу елементу ul 400px
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// d) отримує текст який зберігається в елементі з класом listElement2
// e) отримує всі елементи li та змінює ім колір фону на сірий
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let changer = document.getElementById('main_header')
// changer.classList.add('mon-year')
// console.log(changer);
//
// let list = document.getElementsByTagName('ul')
// for (const li of list){
//     li.style.width = '4000px'
// }
// // list.style.width = '400px'
// // console.log(list);
//
// let linkList = document.getElementsByClassName('linkList')
// for (const link of linkList) {
//     link.style.width = '25%'
// }
// // d) отримує текст який зберігається в елементі з класом listElement2
// let newText = document.getElementsByClassName('listElement2')[0]
// console.log(newText.innerText);
//
// // e) отримує всі елементи li та змінює ім колір фону на сірий
// let backRed = document.getElementsByTagName('li')
// for (const back of backRed){
//     back.style.background = 'grey'
// }
//
// // f) отримує всі елементи 'a' та додає їм клас anchor
// let anchor = document.getElementsByTagName('a')
// for (const an of anchor){
//     an.classList.add('anchor')
// }
// // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let textContent = document.getElementsByTagName('a')
// for (const text of textContent){
//     if (text.innerText.includes('link3')){
//         text.style.fontSize = '40px'
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let elementXXX = document.getElementsByTagName('a')
// console.log(elementXXX)
// for (const element of elementXXX){
//     element.classList.add(`element_${element.innerText}`)
// }
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let subHeader = document.getElementsByClassName('sub-header')
// let color =  prompt('Put a color')
// for (const sub of subHeader){
//     sub.style.background = color
//
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let subHeader1 = document.getElementsByClassName('sub-header')
// let color1 = prompt('Put a color')
// for (const sub of subHeader1){
//     if (sub.innerText.includes('content 2 segment')){
//         sub.style.background = color1
//     }
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content = document.getElementsByClassName('content_1')
// let cont = prompt('Put text')
// for (const text of content){
//     text.innerText = cont
// }


// l) отримати елементи p та змінити їм padding на 20px
// let newP = document.getElementsByTagName('p')
// for (const p of newP){
//     p.style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let newText = document.getElementsByClassName('text2')
for (const text of newText){
    text.innerText = 'sept-2021'
}
