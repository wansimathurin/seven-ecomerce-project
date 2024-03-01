let  joe = document.getElementById("lol")
let nur = document.getElementById("pop")
let eyeslah = document.querySelector(".eye1")
let eyemass = document.querySelector(".eye2")
let emaily = document.getElementById("lhs")
let erro = document.getElementById("emailerro")


function hub(){
    let top = document.getElementById("conerro")

    if(nur.value!=joe.value){
        top.innerHTML = "password NOT match" 
    }
    else{
        top.innerHTML = " "
    }

if(emaily.value.match(/^[A-Za-z\._\-0-9][@][A-Za-z][\.][a-z]{2,4}$/)){
erro.innerHTML = " "
}else{
    erro.innerHTML = "invalid email"
}
}


function eyeoperators(){
    if(eyeslah.classList.contains("fa-eye")){
        eyeslah.classList.remove("fa-eye")
        eyeslah.classList.add("fa-eye-slash");
        if(joe.type==="password"){
            joe.type = "text"
        }

    }
    else{
        eyeslah.classList.add("fa-eye")
        eyeslah.classList.remove("fa-eye-slash")
        if(joe.type==="text"){
            joe.type = "password"
        }

    }
};

function eyeme(){
    if(eyemass.classList.contains("fa-eye")){
        eyemass.classList.remove("fa-eye")
        eyemass.classList.add("fa-eye-slash")
        if(nur.type==="password"){
            nur.type = "text"
        }

    }
    else{
        eyemass.classList.add("fa-eye")
        eyemass.classList.remove("fa-eye-slash")
        if(nur.type==="text"){
            nur.type = "password"
        }

    }
};