// api integration
var container = document.querySelector('.card-container');
function getProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((result) => result.json())
    .then((products) => {
      container.innerHTML = products.map(product=>{
        return ` <div class="card">
            <div class="image-content">
                <img src="${product.image}" width="100%" height="100%">
            </div>
            <div class="desc">
                <h3 class="title">${product.title.slice(0,20)}...</h3>
                 <h4>${product.price} XAF</h4>
                 <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                 </div>
                 <p class="description">${product.description.slice(0,90)}</p>
            </div>
            <button class="addToCart">Add to basket</button>
        </div>`
      }).join(" ")
    });
}
getProducts();


var hmbgMenu = document.querySelector('.hmgr-img');
var hmbgBox = document.querySelector('.hmbg-menu');

hmbgMenu.addEventListener('click', function() {
  hmbgBox.classList.toggle('toggle-hmbg-menu');
})

// TODO: Afficher la barre de recherche dans le hamburger menu

var searchMenu = document.querySelector('div.search-logo i.fa-solid');
var divBox = document.querySelector('div.hmbg-search');

searchMenu.addEventListener('click', function() {
  divBox.classList.toggle('show-hmbg-search');
})

// TODO: Changement de themes

var toggleTheme = document.querySelector('.fa');
var lightBlack;

function lightMode() {
  toggleTheme.classList.toggle('fa-toggle-on');

  if(toggleTheme.classList.contains('fa-toggle-on')) {
    lightBlack = "WHITE";
    console.log("white mode");
    toggleTheme.style.color = '#000';
    toggleTheme.style.transition = '0.6s ease-in-out';
    document.querySelector('.first-icon').style.boxShadow = '0 0 5px 0 #000';
    document.querySelector('.search-bar').style.boxShadow = '0 0 5px 0 #000';
    document.querySelector('.icon').style.boxShadow = '0 0 5px 0 #000';
    document.querySelector('.header-navbar').style.background = '#fff';
    document.querySelector('.header-navbar').style.boxShadow = '0 0 5px 0 #888';
    document.querySelector('div.nav-links ul li.sign-in').style.color = '#000';
    document.querySelector('div.nav-links ul li.return').style.color = '#000';
    document.querySelector('div.nav-links ul li.cart-shopping i').style.color = '#000';
    document.querySelector('div.img-logo img').src = '/image/Amazon-logo-removebg-preview.png';
  } else {
    lightBlack = "DARK";
    console.log("dark mode");
    toggleTheme.style.color = '#fff';
    document.querySelector('.header-navbar').style.background = '#000';
    document.querySelector('div.nav-links ul li.sign-in').style.color = '#fff';
    document.querySelector('div.nav-links ul li.return').style.color = '#fff';
    document.querySelector('div.nav-links ul li.cart-shopping i').style.color = '#fff';
    document.querySelector('div.img-logo img').src = '/image/Amazon-Logo-Font-1-scaled.webp';
  }
  
  // Envoyer tout dans le stockage local
  var setStore = localStorage.setItem('navBar-mode', JSON.stringify(lightBlack));

}

var getStore = JSON.parse(localStorage.getItem('navBar-mode'));
console.log(getStore);

if (getStore === "WHITE") {
    toggleTheme.classList.add('fa-toggle-on');
    toggleTheme.style.transition = '1s ease-in-out';


    toggleTheme.style.color = '#000';
    document.querySelector('.header-navbar').style.background = '#fff';
    document.querySelector('.header-navbar').style.boxShadow = '0 0 5px 0 #888';
    document.querySelector('div.nav-links ul li.sign-in').style.color = '#000';
    document.querySelector('div.nav-links ul li.return').style.color = '#000';
    document.querySelector('div.nav-links ul li.cart-shopping i').style.color = '#000';
    document.querySelector('div.img-logo img').src = '/image/Amazon-logo-removebg-preview.png';
} else {
    toggleTheme.style.color = '#fff';
    document.querySelector('.header-navbar').style.background = '#000';
    document.querySelector('.sign-in').style.color = '#fff';
    document.querySelector('.return').style.color = '#fff';
    document.querySelector('.cart-shopping i').style.color = '#fff';
    document.querySelector('.img-logo img').src = '/image/Amazon-Logo-Font-1-scaled.webp';
}


//carousel
$(document).ready(function(){
  //setup owlcarousel
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      dots:true,
    autoplay:true,
    autoplayTimeout:5000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:1
          }
      }
  })
})

