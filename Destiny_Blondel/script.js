
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
var ratingCont = document.querySelector('.ratingCont');

function popClose() {
    popUpCard.style.display = "none";
}

//looping through cards 

function activate(e) {
    const card = document.querySelectorAll('.card');
    e.target.matches(".next") && popUpIm.append(card[0]);
    // console.log(card[0])
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

                    //calling the image to display

                    // shoWPopUp.addEventListener('click', ()=>{
                    //     popUpCard.style.display = "block";
                    //     show.src = products[i].image;
                    // })

                    // Product Rating set up

                    let star = `<i class="fas fa-star"></i>`
                    lead = [star, star, star, star, star]

                    if (products[i].rating.rate < 2.3) {
                            console.log(products[i].rating.rate)
                            ratingCont.innerHTML = lead.splice(0, 2).join(" ");

                    } else if (products[i].rating.rate > 2.3 && products[i].rating.rate < 3.4) {
                        ratingCont.innerHTML = lead.splice(0, 3).join(" ");

                    } else if (products[i].rating.rate > 3.4 && products[i].rating.rate < 4){
                        ratingCont.innerHTML = lead.splice(0, 4).join(" ");

                    } else {
                        ratingCont.innerHTML = lead.splice(0,5).join(" ");
                    }
 
                });

                console.log(products[i].id + " = " + products[i].rating.rate);
            })

            // console.table(products)

        });
}
popMenu();