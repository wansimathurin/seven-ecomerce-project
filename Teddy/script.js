const form = document.querySelector(".form");
const p_name = document.getElementById("p_name");
const price = document.getElementById("price");
const qty = document.getElementById("qtt");
const desc = document.querySelector("#message")
const imagescr = document.querySelector("img").src;

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const nameValue = p_name.value.trim();
    const priceValue = price.value.trim();
    const qtyValue = qty.value.trim();
    const descValue = desc.value.trim();


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

    var data = {
        'product_name': nameValue,
        'product_price': priceValue,
        'product_qty': qtyValue,
        'product_desc': descValue,
        'product_image': imagescr,
    }

    console.table(data)

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

// this code helps upload image from the computer

var loadFile = function (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};

// using links

document.querySelector(".button_preview").addEventListener('click', function preview() {

    var img = new Image();
    img.src = document.getElementById("image_link").value;
    
    // The URL isn't valid or the resource isn't a picture
    img.onerror = function() { alert("Provided URL does not point to a valid picture.") };
    
    // Ok, we have correct picture; display it
    img.onload = function() {
        document.getElementById("output").src = img.src;
    };

})

    

// 
