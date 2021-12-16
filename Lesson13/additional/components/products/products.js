class Products {
    render () {
        let htmlCatalog = '';

        CATALOG.forEach(({id, name, amount, price, img}) => {
            htmlCatalog +=`
            <li class="products-element">
            <span class="products-element__name">${name}</span>
            <span class="products-element__amount">${amount} Книжок</span>
            <span class="products-element__price">${price} гривень</span>
            <img class="products-element__img" src="${img}"/>
            <button class="products-element__btn">Button</button>
            
</li>
                    `;
        });
        const html = `
        <ul class="products-container">
        ${htmlCatalog}
        </ul>
        `;
        ROOT_PRODUCTS.innerHTML = html;
    }
}
const productsPage = new Products();
productsPage.render();


let functionMy = (CATALOG) => {
    for (const item of CATALOG) {
        let button = document.getElementsByClassName('products-element__btn')
        button.addEventListener('click', () => foo(item))
    }
}
const foo = (item) => {
    let data = localStorage.getItem('favorite')

    if (data) {
        let data1 = JSON.parse(data)
        // data1.push(user)
        localStorage.setItem('favorite', JSON.stringify([...data1, item]))
    } else {
        localStorage.setItem('favorite', JSON.stringify([item]))
    }
}
functionMy(CATALOG);