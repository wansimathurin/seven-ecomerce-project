// import { carouselStuff } from "./carousel.js";

const productContainer = document.querySelector('.products-f');
const wProductContainerLeft = document.querySelector('.w-products .left');
const wProductContainerRight = document.querySelector('.w-products .right');
const carouselContainer = document.querySelector('.carousel');
const slideNext = document.querySelector('.next-slide')
const slidePrev = document.querySelector('.prev-slide')
let HtmlContent = '';
let carouselContent = '';
let WContentLeft = '';
let WContentRight = '';

fetch('https://fakestoreapi.com/products')
.then(products => products.json())
.then(products => {

  // Select first 7 elements
  const firstFourProducts = products.slice(0, 7);
  let delay = 0;
  firstFourProducts.forEach(product => {
    delay+=100;
    console.log(delay)
      HtmlContent += `<div  data-aos="fade-up" data-aos-delay="${delay}" class="products">
        <p class="category">${product.category}</p>
        <div class="image-content">
          <img src="${product.image}" alt="">
        </div>
        <div class="desc">
          <h3 class="title">${product.title.slice(0, 20)}...</h3>
          <div class="rating" data-product-rating="${product.rating.rate}">
          ${stars()}
          </div>
          <div class="description">${product.description.slice(0, 121)}....</div>
          <div class="price">$${product.price.toFixed(2)}</div>
        </div>
        <button>Add to basket</button>
      </div>`;
    });

    productContainer.innerHTML = HtmlContent;

    return fetch('https://fakestoreapi.com/products');
  })
  .then(response => response.json())
  .then(products => {

    // Select 10 products
    const carouselProducts = products.slice(8, 16);

    // Select 2 products
    
    const lastElements = products.slice(17, 19);
    
    // last Product
    const lastElement = products[19];
    // console.log(lastElement)


    carouselProducts.forEach(product => {

      carouselContent += `<div data-aos="fade-up" class="products-carousel ">
        <p class="category">${product.category}</p>
        <div class="image-content">
          <img src="${product.image}" alt="">
        </div>
        <div class="desc">
          <h3 class="title">${product.title.slice(0, 20)}...</h3>
          <div class="rating" data-product-rating="${product.rating.rate}">
          ${stars()}
          </div>
          <div class="description">${product.description.slice(0, 130)}...</div>
        </div>
        <div class="price">$${product.price.toFixed(2)}</div>
        <button>Add to basket</button>
      </div>
      `;
    });

    lastElements.forEach(product => {
      WContentLeft += `<div  data-aos="zoom-out-right" class="products-carousel">
      <p class="category">${product.category}</p>
     .
      <div class="flex-content">
      <div class="image-content">
        <img src="${product.image}" alt="">
      </div>
      <div class="desc">
        <h3 class="title">${product.title.slice(0, 20)}...</h3>
        <div class="rating" data-product-rating="${product.rating.rate}">
        ${stars()}
        </div>
        <div class="price">$${product.price.toFixed(2)}</div>
        <button>Add to basket</button>
      </div>
      </div>
    </div>`;
    })

    WContentRight = `<div data-aos="zoom-in-up" class="right-products">
      <p class="category">${lastElement.category}</p>

      <div class="image-content">
        <img src="${lastElement.image}" alt="">
      </div>
      <div class="desc">
        <h3 class="title">${lastElement.title.slice(0, 20)}...</h3>
        <div class="rating" data-product-rating="${lastElement.rating.rate}">
        ${stars()}</div>
        <div class="description">${lastElement.description.slice(0, 130)}...</div>
        <div class="price">$${lastElement.price.toFixed(2)}</div>
      </div>
      <button>Add to basket</button>
    </div>`;


    carouselContainer.innerHTML = carouselContent;
    wProductContainerLeft.innerHTML = WContentLeft;
    wProductContainerRight.innerHTML = WContentRight;

    const slides = document.querySelectorAll('.carousel div');

    let intervalId;

    function startCarousel() {
      intervalId = setInterval(nextSlide, 5000); 
    }

    startCarousel();
    function stopCarousel() {
      clearInterval(intervalId);
    }


    slideNext.addEventListener('click', () => { ; nextSlide(); })
    slidePrev.addEventListener('click', () => { ; prevSlide(); })

    function nextSlide() {

      carouselContainer.style.transition = 'transform 0.5s ease';
      carouselContainer.style.transform = `translateX(-330px)`;
      setTimeout(() => {
        carouselContainer.style.transition = 'none';
        carouselContainer.style.transform = 'translateX(0)';
        carouselContainer.appendChild(carouselContainer.firstElementChild);
      }, 500);
    }

    function prevSlide() {
      carouselContainer.style.transition = 'none';
      carouselContainer.style.transform = `translateX(-330px)`;
      carouselContainer.insertBefore(carouselContainer.lastElementChild, carouselContainer.firstElementChild);
      setTimeout(() => {
        carouselContainer.style.transition = 'transform 0.5s ease';
        carouselContainer.style.transform = 'translateX(0)';
      }, 50);
    }

    stars();

    return fetch('https://fakestoreapi.com/products');

  });

function stars() {
  const rating = document.querySelectorAll('.rating');
  rating.forEach(rate => {
    const ratingId = rate.dataset.productRating;
    rate.innerHTML = (`<i class="fa fa-star"></i>`).repeat(Math.floor(ratingId));
  })

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


