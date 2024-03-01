
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


