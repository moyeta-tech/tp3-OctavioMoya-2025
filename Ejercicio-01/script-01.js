const operador1 = document.getElementById("op1")
const operador2 = document.getElementById("op2")
const select = document.getElementById("select")
const formulario = document.getElementById("form")
const boton = document.getElementById("btn")

// con document.getElementById obtenemos los elementos por su ID

let resultado = document.createElement("h2") // Creamos la variable resultado que crea un elemento "h2" para mostrar el resultado 
 
formulario.appendChild(resultado) // Hacemos un appendChild de resultado, osea el elemento que acabamos de crear a traves de la DOM

formulario.addEventListener("submit", (e) =>{ // Manejamos el evento submit del formulario en donde realizamos los calculos dependendiendo de la opcion seleccionada  

    e.preventDefault()

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
         resultado.innerHTML=`la división de ${op1} / ${op2} es: ${(op1 / op2).toFixed(1)}`
    }

})

operador2.addEventListener("input", () => { // Con estos otros dos eventos manejamos la situacion de cuando el usuario ingresa un 0 como operador2 a la hora de dividir
    if(select.value === "division" && Number(operador2.value) === 0){
        boton.disabled = true // Deshabilita el boton si es division y si el operador2 es 0
    } else {
        boton.disabled = false
    }
})

select.addEventListener("change", () => {
    if(select.value === "division" && Number(operador2.value) === 0){
        boton.disabled = true
    } else {
        boton.disabled = false
    }
})