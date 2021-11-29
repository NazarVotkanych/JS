// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// function Car(model,producer,Graduation_year,Max_speed,Engine_capacity){
//     this.model = model;
//     this.producer = producer;
//     this.Graduation_year = Graduation_year;
//     this.Max_speed = Max_speed;
//     this.Engine_capacity =Engine_capacity;
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.Max_speed} на годину`)
//     }
//     this.info = function (){
//     for (const property in this){
//         console.log(`${property}:${this[property]}`);
//     }
//     }
//     this.changeYear = function (newValue){
//         this.Year = (newValue)
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         this.Max_speed = Max_speed + newSpeed
//     }
//     this.addDriver = function (driver){
//         this.driver = driver
//     }
// }
// let car = new Car('WW221','Mercedes Benz', 2021,220,3.0);
// console.log(car);
// car.drive()
// car.info()
// car.changeYear(2022)
// car.increaseMaxSpeed(100)
// car.addDriver('Schumaher')
// console.log(car);
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//
//     constructor(model, producer, Graduation_year, Max_speed, Engine_capacity) {
//         this.model = model;
//         this.producer = producer;
//         this.Graduation_year = Graduation_year;
//         this.Max_speed = Max_speed;
//         this.Engine_capacity = Engine_capacity;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.Max_speed} на годину`)
//     }
//     info(){
//     for (const property in this){
//         console.log(`${property}:${this[property]}`);
//     }
//     }
//     changeYear (newValue){
//         this.Year = (newValue)
//     }
//     increaseMaxSpeed (newSpeed){
//         this.Max_speed = this.Max_speed + newSpeed
//     }
//     addDriver (driver){
//         this.driver = driver
//     }
// }
// let car = new Car('WW221','Mercedes Benz', 2021,220,3.0);
// console.log(car);
// car.drive()
// car.info()
// car.changeYear(2022)
// car.increaseMaxSpeed(100)
// car.addDriver('Schumaher')
// console.log(car);
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelu {
    constructor(name,age,size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }

}
// let popelu = new Popelu('Josephine',21,36);
// console.log(popelu);

let popelu = [
    new Popelu('Nastya',20,35),
    new Popelu('Sofia',22,34),
    new Popelu('Annet', 23,34),
    new Popelu('Anas', 23,34),
    new Popelu('Anast', 23,34),
    new Popelu('Anasta', 23,34),
    new Popelu('Anastas', 23,34),
    new Popelu('Anastasi', 23,34),
    new Popelu('Anastasia', 23,34),
    new Popelu('Sofi',15,33),
    new Popelu('Sof',16,32),
    new Popelu('So',17,21,)
];
// console.log(array);

class Prince {
    constructor(name,age,size) {
        this.name = name;
        this.age = age;
        this.findSize = size;
    }
}
let prince = new Prince('Phillip',21,21);
console.log(prince);

let Love = (popelu) => {
    for (const item of popelu){
        if (item.size === prince.findSize){
            return item.name
        }
    }
}
console.log(Love(popelu));
