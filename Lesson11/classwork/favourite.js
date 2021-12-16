let favoItem = localStorage.getItem('favorite')

if (favoItem) {
    let data = JSON.parse(favoItem);
    data.forEach((user) => {
        let users = document.createElement('div')
        users.innerText = `${user.name} -- ${user.age} -- ${user.status}`

        document.body.append(users);
    })
} else {
    document.write('Chose your favorite!!!!');
}



