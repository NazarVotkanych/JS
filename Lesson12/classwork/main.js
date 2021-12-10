// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(posts => {
    //         let wrap = document.createElement('div')
    //         wrap.classList.add('wrap')
    //         for (const post of posts) {
    //             let div = document.createElement('div')
    //             let button = document.createElement('button')
    //             div.classList.add('comment')
    //             div.innerText = `${post.id} ${post.title} ${post.body}`
    //             button.innerText = "CLick"
    //             button.classList.add('button')
    //
    //
    //             button.addEventListener('click', () => {
    //                 fetch('https://jsonplaceholder.typicode.com/posts')
    //                     .then(response => response.json())
    //                     .then(posts => {
    //                         for (const post of posts) {
    //
    //                         }
    //                     });
    //             })
    //
    //             wrap.appendChild(div)
    //             div.appendChild(button)
    //             document.body.appendChild(wrap)
    //         }
    //     });
