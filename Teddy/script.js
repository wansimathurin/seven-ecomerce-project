const form = document.querySelector(".form");
const p_name = document.getElementById("p_name");
const price = document.getElementById("price");
const qty = document.getElementById("qtt");
const desc = document.querySelector("#message") 

var image = document.getElementById('output');

// this code helps upload image from the computer

var loadFile = function (event) {
    image.src = URL.createObjectURL(event.target.files[0]);
};

// previezing image through link

// var image = new Image();
//     image.src = document.addEventListener("click", function preview(){
//         document.getElementById("image_link").value
//     });
    
//     // The URL isn't valid or the resource isn't a picture
//     image.onerror = function() { alert("Provided URL does not point to a valid picture.") };
    
//     // Ok, we have correct picture; display it
//     image.onload = function() {
//         document.getElementById("output").src = image.src;
//     };

    document.getElementById("btn").addEventListener("click", e => {
        let imageInput = document.getElementById("image-input");
        let image = document.getElementById("output");
        if (imageInput.value) image.src = imageInput.value;
      });

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});


function checkInputs() {

    const nameValue = p_name.value.trim();
    const priceValue = price.value.trim();
    const qtyValue = qty.value.trim();
    const descValue = desc.value.trim();

    var table = {
        title: nameValue,
            price: priceValue,
            product_qty: qtyValue,
            description: descValue,
            image: image.src
    }

    if (nameValue === '') {
        setErrorFor(p_name, 'Product name cannot be blank');
    } else {
        setSuccessFor(p_name);
    }

    if (priceValue === '') {
        setErrorFor(price, 'Add price');
    } else if (isNaN(priceValue)) {
        setErrorFor(price, 'use a number')
    }
    else {
        setSuccessFor(price);
    }

    if (qtyValue === '') {
        setErrorFor(qty, 'Add Quntity');
    } else if (isNaN(qtyValue)) {
        setErrorFor(qty, 'use a number')
    }
    else {
        setSuccessFor(qty);
    }

    if (descValue === '') {
        setErrorFor(desc, 'Product description cant be empty');
    } else {
        setSuccessFor(desc);
    }

    fetch('https://fakestoreapi.com/products', {
    method: "POST",
    body: JSON.stringify(
        {
            title: nameValue,
            price: priceValue,
            product_qty: qtyValue,
            description: descValue,
            image: image.scr
        }
    )
})
    .then(res => res.json())
    .then(json => console.log(json))

    console.table(table)
    localStorage.setItem('table', JSON.stringify(table))
}

function setErrorFor(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small')
    formGroup.className = 'form_group error';
    small.innerText = message
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form_group success';
}

