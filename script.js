
//PopUp
//Stating Variables

var popUpIm = document.querySelector(".scrollPop");
var show = document.querySelector('.show');
var headTitle = document.querySelector('.title');
var price = document.querySelector('.price');
var description = document.querySelector('.description');
var category = document.querySelector('.levels');
var close = document.querySelector('.fa-times');
var popUpCard = document.querySelector('.container');
var shoWPopUp = document.querySelectorAll('.card');

function popClose(){
    popUpCard.style.display = "none";
}

//  shoWPopUp.addEventListener('click', ()=>{
//     popUpCard.style.display = "block";
// })

//looping through cards 

function activate(e) {
    const card = document.querySelectorAll('.card');
    e.target.matches(".next") && popUpIm.append(card[0]);
    console.log(card[0])
    e.target.matches(".prev") && popUpIm.prepend(card[card.length - 1]);

}

// calling fuction to action with help of EventListener

document.addEventListener('click', activate, false);

// stating fuction to call the object of the API
function popMenu() {
    fetch('https://fakestoreapi.com/products')
        .then((result) => result.json())
        .then((products) => {
            popUpIm.innerHTML = products.map((product) => {
                return `
            <div class="card">
            <img src="${product.image}" alt="">
            </div> `
            }).join("")

            const card = document.querySelectorAll(".card")


            card.forEach((item, i) => {
                item.addEventListener('click', () => {

                    category.innerHTML = products[i].category;
                    show.src = products[i].image;
                    headTitle.innerText = products[i].title;
                    description.innerHTML = products[i].description;
                    price.innerHTML = products[i].price + "XAF";
                });
                console.log(products[i]);
            })


        });
}
popMenu();