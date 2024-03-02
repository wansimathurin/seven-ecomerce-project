export const checkout = document.querySelector('.items-cart');
export let cart = JSON.parse(localStorage.getItem('cart'));
export const storedCartLength = localStorage.getItem('cartLength');

const itemsNum = document.querySelector('.itemsPrice');
const finalAmount = document.querySelector('.total-amount');
const finalAmountFinal = document.querySelector('.total-amount-final');

let totalPrice = 0;
if (!cart) {
    cart = [{
        productId: '1',
        quantity: 2
    }, {
        productId: '2',
        quantity: 1
    }];
}
if (!itemsNum) {
    console.error("Error: The element with class 'itemPrice' does not exist in the DOM.");
} else {
    itemsNum.innerHTML = `(${cart.length}) items`;
}
if (!checkout) {
    console.error("Error: The element with class 'items-cart' does not exist in the DOM.");
} else {
    checkout.innerHTML = `(${cart.length}) items`;
    localStorage.setItem('cartLength', cart.length)
}

let cartSummaryHTML = '';
const orderItems = document.querySelector('.left');
let cartQuantity = 0;

fetch('https://fakestoreapi.com/products')
    .then(result => result.json())
    .then(products => {
        cart.forEach(cartItem => {
            const productId = cartItem.productId;
            cartQuantity += cartItem.quantity;

            // Find matching product in the products array
            const matchingProduct = products.find(product => product.id == productId);


            if (matchingProduct) {
                totalPrice += matchingProduct.price; // Add the price of each matching product to the total price
                console.log(totalPrice);

                if (!totalPrice) {
                    console.error("Error: The element with class 'total-amount' does not exist in the DOM.");
                } else {
                    finalAmount.innerHTML = `$${totalPrice}`;
                    finalAmountFinal.innerHTML = `$${totalPrice}`;
                }

                cartSummaryHTML += `<div class="info js-cart-item-container-${matchingProduct.id}">
                    <h3>Delivery date: Tuesday, June 21</h3>
                    <div class="box">
                    <div class="left2">
                    <img src="${matchingProduct.image}" alt="">
                    </div>
                    <div class="middle">
                    <h4>${matchingProduct.title}</h4>
                    <span class="price">$${(matchingProduct.price).toFixed(2)}</span>
                    <p>Quantity: ${cartItem.quantity}</p>
                    </div>
                    <div class="right1">
                    <h4>Shipping Cost</h4>
                    <ul>
                    <li><span>Tuesday, June 21</span></li>
                    <li class="Shipping">FREE Shipping</li>
                    </ul>
                        </div>
                    </div>
                    <button class="delete-btn" data-product-id="${matchingProduct.id}">delete</button>
                </div>`;
            }
        });
        orderItems.innerHTML += cartSummaryHTML;

        const deleteBtn = document.querySelectorAll('.delete-btn');
        deleteBtn.forEach(link => {
            link.addEventListener('click', () => {
                const productId = link.dataset.productId;
                removingfromCart(productId);
                checkout.innerHTML = `(${cart.length}) items`;
                itemsNum.innerHTML = `(${cart.length}) items`;
                finalAmount.innerHTML = `$${totalPrice}`;
                finalAmountFinal.innerHTML = `$${totalPrice}`;

                console.log(totalPrice);
                const container = document.querySelector(`.js-cart-item-container-${productId}`).remove();
            });
        });
    });

export function addToCart(productId) {
    let matchingItem;
    cart.forEach(Cartitem => {
        if (productId === Cartitem.productId) {
            matchingItem = Cartitem;
        }
    });
    if (matchingItem) {
        matchingItem.quantity++;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
    saveToStorage();
}

export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removingfromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    saveToStorage();
}
