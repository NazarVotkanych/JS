// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User (id, name, surname , email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let user = new User(21,'Nazar','Votkanych','ahcbajcba@gmail.com',+38095034255);
// console.log(user);
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// const array = [
//     new User(111,'Bib','Votkanych','ddddaadacac.com',+38095656556654),
//     new User(111,'Yob','Votkanych','ppppppppcacac.com',+380955445445),
//     new User(21, 'Nazar', 'Votkanych', 'ahcbajcba@gmail.com', +38095034255),
//     new User(22, 'Nana', 'Votkanych', 'a@gmail.com', +380950364161),
//     new User(10, 'Baba', 'Votkanych', 'cbajcba@gmail.com', +38095026161),
//     new User(51, 'Zaza', 'Votkanych', 'ahcba.com', +380950777777),
//     new User(91,'Rara','Votkanych','ahca@gmail.com',+3809522222),
//     new User(11,'Aaaaa','Votkanych','abajcba@gmail.com',+380950000),
//     new User(561,'Ivan','Votkanych','jcba@gmail.com',+3809515151),
//     new User(5616,'John','Votkanych','baab@gmail.com',+380978484884,
//     new User(111,'Bob','Votkanych','acacaacacac.com',+3809566464),
//     new User(55,'Steven','Votkanych','bebek@gmail.com',+3804546656165))
// ];
// console.log(array);
// const arr = Array.from({ length: 10 }).fill(0);
// console.log(arr)
// let arr = new Array(50).fill().map((d,i)=>++i)
// console.log(arr)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = array.filter((item) => {
//     if (item.id % 2 === 0){
//         return item
//     }
// })
// console.log(filter);
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = array.sort((a, b) => {
//     return a.id - b.id
// })
// console.log(sort);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id
//         this.name = surname
//         this.email = email
//         this.phone = phone
//         this.order = order
//     }
// }
// let client = new Client(55,'Nazar','Votkanych','NazaGmail.com',+3809555555555,['iphone','laptop','pc'])
// створити пустий масив, наповнити його 10 об'єктами Client
// let array = [
//     new Client(111,'Bib','Votkanych','ddddaadacac.com',+38095656556654,['iphone','laptop','pc']),
//     new Client(111,'Yob','Votkanych','ppppppppcacac.com',+380955445445,['iphone','laptop','pc','sfdds','sasaas','asasas','assaas','sasasa']),
//     new Client(21, 'Nazar', 'Votkanych', 'ahcbajcba@gmail.com', +38095034255,['iphone','laptop']),
//     new Client(22, 'Nana', 'Votkanych', 'a@gmail.com', +380950364161,['iphone','laptop','pc','Xbox']),
//     new Client(10, 'Baba', 'Votkanych', 'cbajcba@gmail.com', +38095026161,['iphone','laptop','pc','Xbox','PSP','televison']),
//     new Client(51, 'Zaza', 'Votkanych', 'ahcba.com', +380950777777,['iphone','laptop','pc','Xbox','PSP',]),
//     new Client(91,'Rara','Votkanych','ahca@gmail.com',+3809522222,['iphone']),
//     new Client(11,'Aaaaa','Votkanych','abajcba@gmail.com',+380950000,['iphone','laptop','pc','Xbox','PSP']),
//     new Client(561,'Ivan','Votkanych','jcba@gmail.com',+3809515151,['iphone','laptop','pc','Xbox','PSP','televison','sfesfs','sdsd']),
//     new Client(5616,'John','Votkanych','baab@gmail.com',+380978484884,['iphone','laptop','pc','Xbox','PSP','televison','sdfsdfsdf']),
//     new Client(111,'Bob','Votkanych','acacaacacac.com',+3809566464,['iphone','laptop','pc','Xbox','PSP','televison','sdcsdcs','sdcsdcsdc','sdsdsdc','sdsdcsdc']),
//     new Client(55,'Steven','Votkanych','bebek@gmail.com',+3804546656165,['iphone','laptop','pc','Xbox','PSP','televison','ddc','cdsdcsdc','cacaca','scascac','acacac'])
// ]
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort = array.sort((a, b) => {
//     return a.order.length - b.order.length
// })
// console.log(sort);

