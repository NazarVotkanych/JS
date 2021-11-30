// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }

// class User {
//     constructor(id, name, username, email, address, phone,company){
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email
//         this.address = address;
//         this.phone = phone;
//         this.company = company
//     }
// }
// class Address extends User{
//
//     constructor(street,suite,city,zipcode,geo,id, name, username, email, address, phone, company) {
//         super(id, name, username, email, address, phone, company);
//         this.street = street;
//         this.suite = suite;
//         this.city = city;
//         this.zipcode = zipcode;
//         this.geo = geo;
//     }
// }
// class Geo extends Address{
//     constructor(lat,lng,id, name, username, email, address, phone, company, street, suite, city, zipcode, geo) {
//         super(id, name, username, email, address, phone, company, street, suite, city, zipcode, geo);
//         this.lat = lat;
//         this.lng = lng;
//     }
// }
// class Phone extends User{
//     constructor(website,phone,id, name, username, email, address, company) {
//         super(id, name, username, email, address, company);
//         this.website = website;
//         this.phone = phone
//     }
// }
// class Company extends Phone{
//
//     constructor(name,catchPhrase,bs,id, username, email, address, phone, company) {
//         super(id, username, email, address, phone, company);
//         this.name = name;
//         this.catchPhrase = catchPhrase;
//         this.bs = bs;
//     }
// }
//
// let geo = new Geo('-37.3159','81.1496')
// let address = new Address('Kulas Light','Apt. 556','Gwenborough','92998-3874',geo)
// let phone = new Phone('hildegard.org','1-770-736-8031 x56442',)
// let company = new Company('Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets')
// let user = new User(1,'Leanne Graham','Sincere@april.biz','Sincere@april.biz',address,phone,company)
// console.log(user);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {
//     titleOfAttr: 'accesskey',
//     actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
// //  {/*...*/},
//     {/*...*/},
// ]
//
// }

class Description {

    constructor(name,desc, attrs) {
        this.name = name;
        this.desc = desc
        this.attrs = attrs
    }
}

let attribute = new Description(
    '<a>',
    'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
    [
        {
        titleOfElement: 'area',
        actionOfAttr: 'fewcewcewc'
        },
        {
            titleOfElement: 'aadda',
            actionOfAttr: 'efwecewc'
        }
    ],
    'area',
    'Активация ссылки с помощью комбинации клавиш.');
console.log(attribute);

let diV = new Description(
    '<div>',
    'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
    [
        {
            titleOfElement: 'align',
            actionOfAttr: 'Задает выравнивание содержимого тега <div>.'
        },
        {
            titleOfElement: 'title',
            actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'
        }
    ],
    'area',
    'Активация ссылки с помощью комбинации клавиш.');
console.log(diV);

let h1 = new Description(
    ' <h1>',
    'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции,',
    [
        {
            titleOfElement: 'align',
            actionOfAttr: 'Определяет выравнивание заголовка.'
        },
    ],
    'area',
    'Активация ссылки с помощью комбинации клавиш.');
console.log(h1);

let input = new Description(
    '<span>',
    'Тег <span> предназначен для определения строчных элементов документа.',
    [
        {
            titleOfElement: 'class',
            actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
        },
        {
            titleOfElement: 'contenteditable',
            actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'
        }
    ],
    );
console.log(diV);
let form = new Description(
    '<form>',
    'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.',
    [
        {
            titleOfElement: 'accept-charset',
            actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'
        },
        {
            titleOfElement: 'action',
            actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы'
        }
    ],
);
console.log(form);

let option = new Description(
    ' <option> ',
    'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
    [{
            titleOfElement: 'disabled',
            actionOfAttr: 'Заблокировать для доступа элемент списка.'
        },{
            titleOfElement: 'label',
            actionOfAttr: 'Указание метки пункта списка.'
        }],);
console.log(option);

let select = new Description(
    ' <select> ',
    'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка<select>.',
    [{
        titleOfElement: 'accesskey',
        actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш..'
    },{
        titleOfElement: 'autofocus',
        actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'
    }],);
console.log(select);



