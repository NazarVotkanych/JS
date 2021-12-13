// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(posts => {
            let wrap = document.createElement('div')
            wrap.classList.add('wrap')
            for (const post of posts) {
                let div = document.createElement('div')
                let button = document.createElement('button')
                div.classList.add('comment')
                div.innerHTML = `
                <h2>${post.id}</h2> 
                 <h3>${post.title}</h3> 
                 <p><b>Body</b>${post.body}</p>`
                button.innerText = "CLick"
                button.classList.add('button')


                button.addEventListener('click', () => {
                    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                        .then(response => response.json())
                        .then(comments => {
                            for (const comment of comments) {
                                if (post.id === comment.postId) {
                                    let divComments = document.createElement('div')
                                    divComments.innerHTML =
                                        `
                                        <h2> ID: ${comment.id}</h2>
                                        <h3>${comment.name}</h3>
                                         <p><b>Email</b>${comment.email}</p>
                                         <p><b>Body</b>${comment.body}</p>
                                         `;


                                    div.appendChild(divComments)

                                }
                            }
                        });
                })
                wrap.appendChild(div)
                div.appendChild(button)
                document.body.appendChild(wrap)
            }
        });





