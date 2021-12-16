// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let functionMy = (users) => {
    for (const user of users) {
        let userNew = document.createElement('div')
        let button = document.createElement('button')

        userNew.innerText = `${JSON.stringify(user)}`
        button.innerText = 'add to favorite'

        button.addEventListener('click', () => foo(user))

        userNew.append(button);
        document.body.append(userNew)
    }
}

const foo = (user) => {
    let data = localStorage.getItem('favorite')

    if (data) {
        let data1 = JSON.parse(data)
        // data1.push(user)
        localStorage.setItem('favorite', JSON.stringify([...data1, user]))
    } else {
        localStorage.setItem('favorite', JSON.stringify([user]))
    }
}
functionMy(users)

let buttonFavorite = document.createElement('button')
document.body.append(buttonFavorite)
buttonFavorite.innerText = 'Favorite'
buttonFavorite.onclick = () => {
    location.href ='favourite.html'
}

// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву
// favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

