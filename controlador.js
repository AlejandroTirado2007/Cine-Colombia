let contenedor = document.getElementById("contenedor");
let silla = true

contenedor.addEventListener("click" , function(event){

    if (silla == true){
        if (event.target.classList.contains="w-100"){

            event.target.src="img/sillaa.png"
            silla = false
        }
    }

    else{
        if (silla == false){
            if (event.target.classList.contains="w-100"){
                event.target.src="img/silla.png"
                silla = true
            }
        }
    }

})



