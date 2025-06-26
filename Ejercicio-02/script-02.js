const form = document.getElementById("form")
const input = document.getElementById("input")


const listaPalabras = ["Lampara", "Libro", "Botella", "Monitor", "Procesador", "Teclado"]

const mensajeError = document.createElement("p") // Creamos la variable mensajeError y creamos un elemento "p"
mensajeError.style.color = "red" // Le damos un color rojo

const resultFiltrado = document.createElement("h2") // Tambien un "h2" para mostrar el resultado y que se vea mejor

form.appendChild(mensajeError)
form.appendChild(resultFiltrado)

form.addEventListener("submit", (e) =>{

    e.preventDefault()
 
    if(input.value.trim() === ""){ // Validamos si el valor del input esta vacio
        mensajeError.innerHTML = "Escribe algo para filtrarlo"
        resultFiltrado.innerHTML = ""
        return
    } 
    mensajeError.innerHTML = ""
    resultFiltrado.innerHTML = ""

    // Realizamos la logica de filtrado de palabras
    const busqueda = input.value.trim().toLowerCase() // Convertimos el valor del input a minuscula
    const resultado = listaPalabras.filter(p => 
       p.toLowerCase().includes(busqueda) // Guardamos en un nuevo arreglo y filtramos las palabras que incluyan el valor del input

    )
    resultado.length === 0 ?  // Si la longitud de resultado que es el nuevo arreglo es 0 muestra un mensaje que no se encontraron coincidencias, si no, muestra las palabras relacionadas
    resultFiltrado.innerHTML = "No se encontraron coincidencias" :
    resultFiltrado.innerHTML = "Palabras: " + resultado.join(", ")

})