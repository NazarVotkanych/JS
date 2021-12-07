// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let divFirst = document.createElement('div')
// divFirst.innerText = 'Here we go'
// document.body.appendChild(divFirst)
//
// let formFirst = document.createElement('form')
// let inputOne = document.createElement('input')
// let inputTwo = document.createElement('input')
// let button1 = document.createElement('button')
//
// button1.innerText = 'btn1'
//
// formFirst.append(inputOne, inputTwo)
// divFirst.append(formFirst, button1)
//
//
//
// let divSecond = document.createElement('div')
// divSecond.innerText = 'Now we here'
// document.body.appendChild(divSecond)
//
// let formSecond = document.createElement('form')
// let inputThree = document.createElement('input')
// let inputFour = document.createElement('input')
// let button2 = document.createElement('button')
//
// formSecond.setAttribute('name', 'formSecond')
// inputThree.setAttribute('name', 'inputThree')
// inputFour.setAttribute('name', 'inputFour')
// button2.innerText = 'btn2'
//
// button2.onclick = () => {
//     console.log(document.forms.formSecond.inputThree.value);
//     console.log(document.forms.formSecond.inputFour.value);
// }
//
// formSecond.append(inputThree, inputFour)
// divSecond.append(formSecond, button2)


//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let labelOne = document.createElement('label');
let labelTwo = document.createElement('label');
let labelThree = document.createElement('label');

labelOne.innerText = "кількість рядків"
labelTwo.innerText = "кількість ячеєк"
labelThree.innerText = "вміст ячеєк"


let inputOne = document.createElement('input')

let inputTwo = document.createElement('input')
let inputThree = document.createElement('input')
let button2 = document.createElement('button')

button2.innerText = 'btn2'

labelOne.append(inputOne);
labelTwo.append(inputTwo);
labelThree.append(inputThree);

document.body.append(labelOne, labelTwo, labelThree, button2);


button2.addEventListener('click', () => {
    generate_table(inputOne.value, inputTwo.value, inputThree.value);
})

function generate_table(tr, td, textEnter) {
    let table = document.createElement('table')
    document.body.appendChild(table)

    for (let i = 0; i < tr; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < td; j++) {
            let td = document.createElement("td");
            td.innerText = textEnter
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
}


//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку