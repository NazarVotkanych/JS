// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал
// элемент с id="text".
// let hide = document.getElementById('hide')
// let text = document.getElementById('text')
// hide.addEventListener('click', () => {
//     // text.style.display = 'none'
// text.hidden = !text.hidden;
// })
//

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// document.getElementById('buttons').onclick = function () {
//     let age = document.getElementById('age').value;
//     if (age < 18) {
//         console.log('You are too young')
//     } else {
//         console.log('Welcome')
//     }
// }

//
// - Создайте меню, которое раскрывается/сворачивается при клике
//
// let menuElement = document.querySelector("#menu");
// let list = document.querySelector('.list');
//
// menuElement.onclick = function () {
//     list.hidden = !list.hidden;
// };
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//     {title : 'Гаррі Поттер', body:'lorem ipsum dolo sit ameti'},
//     {title : 'Володар Перснів', body:'lorem ipsum dolo sit ameмвамвамвамвамti'},
//     {title : 'Алхімік', body:'пвапваппппаіпаіппівівиівииіип'}
// ]
// let divFather = document.createElement('div')
//
// for (const item of comments ) {
//     let div = document.createElement('div')
//     let h1 = document.createElement('h1')
//     let p = document.createElement('p')
//     let btn = document.createElement('button')
//
// h1.innerText = item.title;
// p.innerHTML = item.body;
// btn.innerHTML = 'Close me';
//
// btn.onclick = () => {
//     div.hidden = !div.hidden
// }
//
// div.append(h1, p , btn)
// divFather.append(div);
// }
// document.body.appendChild(divFather);


