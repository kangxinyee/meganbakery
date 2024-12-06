let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Wholemeal Sourdough Bread',
        image: 'Wholemeal Sourdough Bread.JPG',
        price: 9.90
    },
    {
        id: 2,
        name: 'Dark Rye Bread',
        image: 'Dark Rye Bread.JPG',
        price: 9.90
    },
    {
        id: 3,
        name: 'Sourdough Focaccia',
        image: 'Sourdough Focaccia.WEBP',
        price: 8.90
    },
    {
        id: 4,
        name: 'French Baguette',
        image: 'French Baguette.JPG',
        price: 6.30
    },
    {
        id: 5,
        name: 'Original Bagel',
        image: 'Original Bagel.WEBP',
        price: 4.50
    },
    {
        id: 6,
        name: 'Cocoa Bagel',
        image: 'Cocoa Bagel.JPG',
        price: 4.90
    },
    {
        id: 7,
        name: 'Cranberry Bagel',
        image: 'Cranberry Bagel.WEBP',
        price: 4.90
    },
    {
        id: 8,
        name: 'Wholemeal Bagel',
        image: 'Wholemeal Bagel.WEBP',
        price: 4.90
    },
    {
        id: 9,
        name: 'Butter Sugar Brioche',
        image: 'Butter Sugar Brioche.JPG',
        price: 3.50
    },
    {
        id: 10,
        name: 'Mulberry Cream Cheese Bun',
        image: 'Mulberry Cream Cheese Bun.WEBP',
        price: 3.10
    },
    {
        id: 11,
        name: 'Wild Mushroom Focaccia',
        image: 'Wild Mushroom Focaccia.WEBP',
        price: 5.50
    },
    {
        id: 12,
        name: 'Cheesy Jumbo Bread',
        image: 'Cheesy Jumbo Bread.WEBP',
        price: 9.90
    },
    {
        id: 13,
        name: 'Cheesy Spring Onion Bread',
        image: 'Cheesy Spring Onion Bread.WEBP',
        price: 6.00
    },
    {
        id: 14,
        name: 'Raisin Cream Cheese Bun',
        image: 'Raisin Cream Cheese Bun.WEBP',
        price: 4.20
    },
    {
        id: 15,
        name: 'Salty Butter Bun',
        image: 'Salty Butter Bun.WEBP',
        price: 2.90
    },
    {
        id: 16,
        name: 'Salty Chocolate Bun',
        image: 'Salty Chocolate Bun.WEBP',
        price: 3.20
    },
    {
        id: 17,
        name: 'Lemon Cheese Danish',
        image: 'Lemon Cheese Danish.JPG',
        price: 6.50
    },
    {
        id: 18,
        name: 'Peach Danish',
        image: 'Peach Danish.WEBP',
        price: 6.50
    },
    {
        id: 19,
        name: 'Caramel Apple Pie',
        image: 'Caramel Apple Pie.JPG',
        price: 4.80
    },
    {
        id: 20,
        name: 'Chicken Slice Danish',
        image: 'Chicken Slice Danish.JPG',
        price: 5.80
    },
    {
        id: 21,
        name: 'Chocolate Danish',
        image: 'Chocolate Danish.JPG',
        price: 5.80
    },
    {
        id: 22,
        name: 'Pumpkin Danish',
        image: 'Pumpkin Danish.WEBP',
        price: 6.50
    },
    {
        id: 23,
        name: 'Butter Croissant',
        image: 'Butter Croissant.JPG',
        price: 4.80
    },
    {
        id: 24,
        name: 'Lava Choco Danish',
        image: 'Lava Choco Danish.JPG',
        price: 6.50
    },
    {
        id: 25,
        name: 'Crispy Rocher Matcha',
        image: 'Crispy Rocher Matcha.JPG',
        price: 85.00
    },
    {
        id: 26,
        name: 'Red Velvet',
        image: 'Red Velvet.JPG',
        price: 85.00
    },
    {
        id: 27,
        name: 'Black Forest Cake',
        image: 'Black Forest Cake.WEBP',
        price: 85.00
    },
    {
        id: 28,
        name: 'Chocolate Moist Cake',
        image: 'Chocolate Moist Cake.WEBP',
        price: 85.00
    },
    {
        id: 29,
        name: 'Earl Grey Cake',
        image: 'Earl Grey Cake.WEBP',
        price: 85.00
    },
    {
        id: 30,
        name: 'New York Cheesecake',
        image: 'New York Cheesecake.WEBP',
        price: 78.00
    },
    {
        id: 31,
        name: 'Chocolate Cheesecake',
        image: 'Chocolate Cheesecake.JPG',
        price: 68.00
    },
    {
        id: 32,
        name: 'Lemon Cheesecake',
        image: 'Lemon Cheesecake.WEBP',
        price: 68.00
    }

];
let listCarts  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(listCarts[key] == null){
        // copy product form list to list cart
        listCarts[key] = JSON.parse(JSON.stringify(products[key]));
        listCarts[key].quantity = 1;
    }
    reloadCart();
}
function reloadCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCart.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCarts[key];
    }else{
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price;
    }
    reloadCart();
}