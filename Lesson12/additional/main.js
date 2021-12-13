// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
// fetch(`https://jsonplaceholder.typicode.com/posts`)


fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => {
        let wrap = document.createElement('div')
        wrap.classList.add('wrap')
        for (const user of users) {
         let divUsers = document.createElement('div')
            let div = document.createElement('div')
            let button = document.createElement('button')
            div.classList.add('comment')
            div.innerHTML = `
                <h2>${user.id}</h2> 
                 <h3>Name:${user.name}</h3> 
                 <p><b>Body:</b>${user.email}</p>
                  <p><b>Address: {</b></p>
                    <p><b>Street:</b>${user.address.street}</p>
                    <p><b>Suite:</b>${user.address.suite}</p>
                    <p><b>City:</b>${user.address.city}</p>
                    <p><b>Zipcode:</b>${user.address.zipcode}</p>
                    <p><b>}</b></p>
                    <p><b>Geo: {</b><p><b>Lat:</b>${user.address.geo.lat}</p> <p><b>Lat:</b>${user.address.geo.lng}</p></p>
                    <p><b>}</b></p>
                    <p><b>Phone:</b>${user.phone}</p>
                     <p><b>Website:</b>${user.website}</p>
                      <p><b>Company: {</b></p>
                      <p><b>Name:</b>${user.company.name}</p>
                       <p><b>CatchPhrase:</b>${user.company.catchPhrase}</p>
                        <p><b>Name:</b>${user.company.bs}</p>
                         <p><b>}</b></p>
`
            button.innerText = "CLick"
            button.classList.add('button')


            button.addEventListener('click', () => {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(response => response.json())
                    .then(posts => {
                        for (const post of posts) {
                            if (user.id === post.userId) {
                                let divPosts = document.createElement('div')
                                let button1 = document.createElement('button1')

                                divPosts.innerHTML =
                                    `
                                    <h2>${post.id}</h2>
                                    <h3>${post.title}</h3>
                                    <p><b>Body</b>${post.body}</p>`
                                ;


                                div.appendChild(divPosts)
                                div.appendChild(button1)
                                divPosts.appendChild(button1)
                                button1.innerText = "Click Here"
                                button1.classList.add('button1')
                                button1.addEventListener('click', () => {
                                    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                        .then(response => response.json())
                                        .then(comments => {
                                            for (const comment of comments) {
                                                // if (post.id === comment.userId) {
                                                    let divComments = document.createElement('div')
                                                    divComments.innerHTML = `
                                                <h2> ID: ${comment.id}</h2>
                                                <h3>${comment.name}</h3>
                                                <p><b>Email</b>${comment.email}</p>
                                                <p><b>Body</b>${comment.body}</p>
                                                    `
                                                    divPosts.appendChild(divComments)
                                                }
                                            // }
                                        });
                                });
                                div.appendChild(divPosts)
                                div.appendChild(button1)
                                divPosts.appendChild(button1)
                            }
                        }
                    });
            })
            divUsers.appendChild(div)
            wrap.appendChild(divUsers)
            div.appendChild(button)
            document.body.appendChild(wrap)
        }
    });


