// <!--        template 1.1-->
// <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//     інші об'єкти масиву
//   ...
//   ...
//   ...
//     -->
// </ul>
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`)
// for (let i = 0; i < listOfItems.length - 1; i++) {
//     document.write(`<li>${listOfItems[i]}</li>`)
// }
// document.write(`</ul>`)

// <div>
//     NAME- SURNAME- AGE- INFO- <img src="PHOTO" alt="">
// </div>

// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// for (const simpson of simpsons) {
//     document.write(`<div>`);
//     document.write(`<img src=${simpson.photo}>`)
//     for (const key in simpson) {
//         document.write(`<div>${key} - ${simpson[key]}</div>`);
//     }
//     document.write(`</div>`);
// }
// <div>
//     <h2>NAME SURNAME. age is - AGE</h2>
//     <p>INFO</p>
//     <img src="PHOTO" alt="">
// </div>
// for (const simpson of simpsons) {
//     document.write(`<div>`);
//         document.write(`<h2>${simpson.name} ${simpson.surname}. age is ${simpson.age}</h2>`)
//         document.write(`<p>${simpson.info}</p>`)
//         document.write(`<img src="${simpson.photo}">`)
//     document.write(`</div>`);
// }

// <div className="product-card">
//     <h3 className="product-title">TITLE. Price - PRICE</h3>
//     <img src="" alt="" className="product-image">
// </div>

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// for (const product of products) {
//     document.write(`<div> product-card`);
//     document.write(`<h3>${product.title}-TITLE. Price - ${product.price}</h3>`)
//     document.write(`<img src="${product.image}">`)
//     document.write(`</div>`);
// }

// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
// let array = [];
// for (let i = 0; i < 100; i++) {
//     if ( i % 2 === 0) {
//         array[array.length] = i
//     }
//     console.log(array);
// }
// console.log(array);
// let array = [];
// let array1 = [];
// for (let i = 0; i < 50; i++){
//     i%2 === 0 ? array[i] = i : array1[i] = i;
// }
// console.log(array);
// console.log(array1);
//     b. заповнити його 50 непарними числами за допомоги циклу.
// let array = [];
// for (let i = 0; i < 100; i++) {
//     if ( !(i % 2 === 0)) {
//         array[array.length] = i
//     }
//     console.log(array);
// }
// console.log(array);
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// for (let i = 0; i < 20; i++){
//     let array = 0;
//     for ( let j = 0; j < Math.floor(Math.random() * 20); j++) {
//         array++
//     }
//     console.log(array)
// }
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//
// for (let i = 0; i < 20; i++){
//     let array = 8;
//     for ( let j = 0; j < Math.floor(Math.random() * 732); j++) {
//         array++
//     }
//     console.log(array)
// }

// 2. Вивести за допомогою console.log кожен третій елемен
// let array = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 2; i < array.length; i+=3) {
//     console.log(array[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let array = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 2; i < array.length; i+=3) {
//     if (array[i]%2 === 0) {
//         console.log(array);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let array = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 2; i < array.length; i+=3) {
//     if (array[i]%2 === 0) {
//         console.log(array);
//     }
//     let array1=array;
//     console.log(array1[i]);
// }
// console.log(array1);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let array = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < array.length; i++) {
//     let j;
//     for (j = i+1; j < array.length; j++){
//         if (array[j]%2 === 0) {
//            console.log(array[j]);{
//            }
//         }
//     }
//
// }
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let array = [100,250,50,168,120,345,188];
// let x = 0;
// for (let i = 0; i < array.length; i++){
//     x = x + array[i];
// }
// console.log(x);
// x = x / array.length;
// console.log(x);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// //
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// //
// let array = usersWithId.concat(citiesWithId);
// console.log(array);
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i<array.length; i++) {
//     if (i%2 === 0) {
//         console.log(array[i])
//     }
// }
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c'];
// let ar = "";
// for (let i = 0; i < array.length; i++) {
//     ar = ar + array[i];
// }
// console.log(ar);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c'];
// let ar = "";
// let i = 0;
// while (i < array.length){
//     ar = ar + array[i];
//     i++
// }
// console.log(ar);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let array = [ 'a', 'b', 'c'];
for (const arra of array){
    console.log(`${arra[0]}`);
}