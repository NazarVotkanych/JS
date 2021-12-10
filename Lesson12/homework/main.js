// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(posts => {
//             for (const post of posts) {
//                 let div = document.createElement('div');
//                 div.innerText = `${post.id} ${post.title} ${post.body}`
//                 let wrap = document.getElementById('wrap');
//                 wrap.appendChild(div);
//                 document.body.appendChild(wrap);
//             }
//         });

//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
//
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(comments => {
            let wrap = document.createElement('div')
            wrap.classList.add('wrap')
            for (const comment of comments) {
                let div = document.createElement('div')
                div.classList.add('comment')
                div.innerText = `${comment.id} ${comment.name} ${comment.email} ${comment.body}`
                wrap.appendChild(div)
                document.body.appendChild(wrap);

            }
        });