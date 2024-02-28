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