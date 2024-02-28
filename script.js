// var age =12
// var name ='john'

// var sentence = name +' ' + 'is ' + age; //john is 12

// var phrase = `${name} is ${age}`; // john is 12

//api  integration
var container = document.querySelector('.card-container');

 function getProducts() { 
    fetch("https://fakestoreapi.com/products")
    .then((result) => result.json())
    .then((products) => {
      container.innerHTML = products.map(product=>{
        return `        <div class="card">
        <h4 class="men"><i>men's clothing</i></h4>           
        <div class="img-contain">                
            <img src="${product.image}" width="100%" height="100%" alt="Bag image">
        </div>
        <div class="desc">
            <h3 class="title">${product.title.slice(0,20)}... </h3>
            <div class="stars">
                <i class="fas fa-star"${product.rate}></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <p class="description">${product.description.slice(0,70)}</p>
        </div>
        <div class="md-5">XAF</div>
        <button class="addToCard">Add To Basket</button>
    </div>`
      }).join(" ")

    })
 }

 
 getProducts();







var category = document.querySelector('.categories')
function getCategory() { 
  fetch("https://fakestoreapi.com/products/categories")
  .then((result) => result.json())
  .then((products) => {
    category.innerHTML += products.map(category=>{
     return ` <p class="line">${category}</p>`
    }).join(" ")
  });
}

 getCategory();