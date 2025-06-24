const form = document.getElementById("form")
const input = document.getElementById("input")


const listaPalabras = ["Lampara", "Libro", "Botella", "Monitor", "Procesador", "Teclado"]

const mensajeError = document.createElement("p")
mensajeError.style.color = "red"

const resultFiltrado = document.createElement("h2")

form.appendChild(mensajeError)
form.appendChild(resultFiltrado)

form.addEventListener("submit", (e) =>{

    e.preventDefault()

    if(input.value.trim() === ""){
        mensajeError.innerHTML = "Escribe algo para filtrarlo"
        resultFiltrado.innerHTML = ""
        return
    } 
    mensajeError.innerHTML = ""
    resultFiltrado.innerHTML = ""

    const busqueda = input.value.trim().toLowerCase()
    const resultado = listaPalabras.filter(p =>
       p.toLowerCase().includes(busqueda)

    )
    resultado.length === 0 ? 
    resultFiltrado.innerHTML = "No se encontraron coincidencias" :
    resultFiltrado.innerHTML = "Palabras: " + resultado.join(", ")

})