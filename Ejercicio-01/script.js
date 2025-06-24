const operador1 = document.getElementById("op1")
const operador2 = document.getElementById("op2")
const select = document.getElementById("select")
const formulario = document.getElementById("form")

let mensaje = document.createElement("p")
mensaje.style.color= 'red'
let resultado = document.createElement("h2")

formulario.appendChild(mensaje)
formulario.appendChild(resultado)

formulario.addEventListener("submit", (e) =>{

    // Prevenimos que el formulario envie datos al servidor
    e.preventDefault()

    mensaje.innerHTML = ""
    resultado.innerHTML = ""

    const op1 = Number(operador1.value)
    const op2 = Number(operador2.value)

    const selectedOption = select.value

    if(selectedOption === "suma"){
        resultado.innerHTML = `la suma de ${op1} + ${op2} es: ${op1 + op2}`
    }
    if(selectedOption === "multiplicacion"){
        resultado.innerHTML = `la multiplicación de ${op1} x ${op2} es: ${op1 * op2}`
    }
    if(selectedOption === "resta"){
        resultado.innerHTML = `la resta de ${op1} - ${op2} es: ${op1 - op2}`
    }
    if(selectedOption === "division"){
        op2 === 0 ? 
        mensaje.innerHTML="No se puede dividir entre 0" :  
        resultado.innerHTML=`la división de ${op1} / ${op2} es: ${(op1 / op2).toFixed(1)}`
    }

})