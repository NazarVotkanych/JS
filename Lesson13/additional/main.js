// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

const CATALOG =[
    {
        id:1,
        name:'Книга Зеленый свет',
        amount:40,
        price: 280,
        img:'image/image_boo1.jpg'
    },
    {
        id:2,
        name:'Книга Клуб убийств по четвергам',
        amount:50,
        price: 297,
        img:'image/image_boo3.png'
    },
    {
        id:3,
        name:'Книга 1984',
        amount:15,
        price: 125,
        img:'image/image_boo2.jpg'
    }
];

const ROOT_PRODUCTS = document.getElementById('products');
const ROOT_HEADER = document.getElementById('header');
const ROOT_SHOPPING = document.getElementById('shopping');