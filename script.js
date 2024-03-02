

//api integration
var container = document.querySelector('.card-container')
function getProducts(){
fetch('https://fakestoreapi.com/products')
.then((result) => result.json())
.then((products) => {
  container.innerHTML = products.map(product => {
    return ` <div class="card">
    <h4 class="men"><i>${product.category}</i></h4>
    <div class="img-contain">
      <img
        src="${product.image}"
        width="100%"
        height="100%"
        alt="Bag image"
      />
    </div>
    <div class="desc">
      <h3 class="title">${product.title.slice(0,30)}...</h3>
      <div class="stars">${product.rating}
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <p class="description">${product.description.slice(0,90)}..
      </p>
    </div>
    <button class="addToCard">Add To Basket</button>
  </div>
`

  }).join(" ")
});
}

getProducts();