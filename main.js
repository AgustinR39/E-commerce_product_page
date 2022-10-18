// Cambio de cantidad de articulos

let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', () => {
    userInputNumber++;
    userInput.value = userInputNumber
});

minusBtn.addEventListener('click', () => {
    userInputNumber--;
    if(userInputNumber <= 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber
});

// Agregar el total del productos al carrito

const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastvalue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', () => {
    lastvalue = lastvalue + userInputNumber;

    cartNotification.innerText = lastvalue;
    cartNotification.style.display = 'block';
    drawProductInModal();
    priceModal.innerHTML = `$125.00 x ${lastvalue} <span>$${lastvalue*125}.00</span>`
    if(lastvalue == 0){
        cartNotification.style.display = 'none';
    }
});

// Mostrar el modal con el detalle del carrito

const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
let priceModal = document.querySelector('.cart-modal__price');
const productContainer = document.querySelector('.cart-modal__checkout-container');

cartIconBtn.addEventListener('click', () => {
    cartModal.classList.toggle('show');
    if(lastvalue == 0){
        drawProductInModal();
    }
});

// Borrar contenido del carrito

function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');
    
    deleteProductBtn.addEventListener('click', () => {
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
        lastvalue = 0;
        cartNotification.innerHTML = lastvalue;
        if(lastvalue == 0){
            cartNotification.style.display = 'none';
        }
    });
}

// Funciones

function drawProductInModal(){
    productContainer.innerHTML = `
        <div class="cart-modal__details-container">
            <img  class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="">
            <div>
                <p class="cart-modal__product">Autum Limited Edition...</p>
                <p class="cart-modal__price">$125.00 x ${lastvalue} <span>$${lastvalue*125}.00</span></p>
            </div>
            <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
        </div>
        <button class="cart-modal__checkout">Checkout</button>`
    deleteProduct();
    if(lastvalue == 0){
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    }
};