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
    if(lastvalue === 0){
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
        if(lastvalue === 0){
            cartNotification.style.display = 'none';
        }
    });
}

// Cambios despues del boton flecha

const imageContainer = document.querySelector('.gallery__image-container');
const previusGalleryBtn = document.querySelector('.gallery__previus');
const nextGalleryBtn = document.querySelector('.gallery__next');
let imgIndex = 1;

nextGalleryBtn.addEventListener('click', () => {
    changeNextImage(imageContainer);
})

previusGalleryBtn.addEventListener('click', () => {
    changePreviusImage(imageContainer);
})

// Mostrar el modal de imagenes al hacer click en la imagen principal

const imagesModal = document.querySelector('.modal-gallery__background')
const closeModalBtn = document.querySelector('.modal-gallery__close');

imageContainer.addEventListener('click', () => {
    // imagesModal.style.display = 'grid';
    if(window.innerWidth >= 1115){
        imagesModal.style.display = 'grid';
    }
});

closeModalBtn.addEventListener('click', () => {
    imagesModal.style.display = 'none';
})

// Cambiar la imagen dede los thumbnails

let thumbnails = document.querySelectorAll('.gallery__thumnail')
thumbnails = [...thumbnails]

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', event => {
        console.log(event.target.id)
        imageContainer.style.backgroundImage = `url('./images/image-product-${event.target.id}.jpg')`
    })
})

// Cambiar las imagenes desde los thumbnails en el modal

let modalThumbnails = document.querySelectorAll('.modal-gallery__thumnail')
const modalImageContainer = document.querySelector('.modal-gallery__image-container')
modalThumbnails = [...modalThumbnails]

modalThumbnails.forEach(modalThumbnail => {
    modalThumbnail.addEventListener('click', event => {
        console.log(event.target.id.slice(-1))
        modalImageContainer.style.backgroundImage = `url('./images/image-product-${event.target.id.slice(-1)}.jpg')`
    })
})

// Cambiar imagen modal con flechas

const previusModalBtn = document.querySelector('.modal-gallery__previus')
const nextModalBtn = document.querySelector('.modal-gallery__next')

nextModalBtn.addEventListener('click', () => {
    changeNextImage(modalImageContainer);
})

previusModalBtn.addEventListener('click', () => {
    changePreviusImage(modalImageContainer);
})

// Mostrar navbar modal

const hamburgerMenu = document.querySelector('.header__menu');
const modalNavbarBackground = document.querySelector('.modal-navbar__background');
const closeModalNavbar = document.querySelector('.modal-navbar__close-icon');
const modalNavbar = document.querySelector('.modal-navbar')

// modalNavbar.style.display = 'none'

hamburgerMenu.addEventListener('click', ()=>{
    modalNavbarBackground.style.display = 'block';
    modalNavbar.style.display = 'block';
});

closeModalNavbar.addEventListener('click', ()=>{
    modalNavbarBackground.style.display = 'none';
    modalNavbar.style.display = 'none';
});


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
    if(lastvalue === 0){
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    }
};

function changeNextImage(imgContainer) {
    if(imgIndex === 4){
        imgIndex = 1;
    }else{
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`
}

function changePreviusImage(imgContainer){
    if(imgIndex === 1){
        imgIndex = 4;
    }else{
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`
}