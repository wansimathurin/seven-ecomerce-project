const form = document.querySelector(".form");
const p_name = document.getElementById("p_name");
const price = document.getElementById("price");
const qty = document.getElementById("qtt");
// const desc = document.getElementById("message")

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
    const nameValue = p_name.value.trim();
    const priceValue = price.value.trim();
    // const descValue = desc.Value;
    const qtyValue = qty.value.trim();

    if(nameValue === ''){
        setErrorFor(p_name, 'Product name cannot be blank');
    } else {
        setSuccessFor(p_name);
    }

    if(priceValue === ''){
        setErrorFor(price, 'Add price');
    } else if (isNaN(priceValue)) {
        setErrorFor(price, 'use a number')
    }
    else {
        setSuccessFor(price);
    }

    if(qtyValue === ''){
        setErrorFor(qty, 'Add Quntity');
    } else if(isNaN(qtyValue)) {
        setErrorFor(qty, 'use a number')
    }
     else {
        setSuccessFor(qty);
    }

    // if(descValue === ''){
    //     setErrorFor(qty, 'Add Quntity');
    //     console.log('error1')
    // } else {
    //     setSuccessFor(desc);
    // }

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

console.log("teddy")