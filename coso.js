let submit = document.getElementById("submit")

submit.addEventListener("click" , escucha )

function escucha (event){
    event.preventDefault()

    let selector = document.getElementById("selector").value
    let cantidad = document.getElementById("cantidad").value
    
    if (selector == "1") {
        alert("Su valor a pagar es $" + cantidad * 40000 )
    }

    else {
        alert("Su valor a pagar es $" + cantidad * 20000)
    }
}
