const container = document.querySelector('.container')


fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data=>{
    const allProducts = data.map(item=>{
        return `<div class="card-container">
        <img class="photo" src="${item.image}">
        <p class="category">Category: <span>${item.category}</span></p>
        <p class="price">Price: <span>${item.price}</span> $</p>
        </div>`
    })
    container.innerHTML = allProducts.join('')
})
.catch(error=>{
    console.log(error)
})