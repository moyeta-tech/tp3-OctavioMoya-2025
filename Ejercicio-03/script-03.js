const boton = document.getElementById("boton")

const ulist = document.createElement("ul")

// Obtenemos el boton y creamos una lista no ordenada

document.body.appendChild(ulist)

const todosEndpoint = "https://jsonplaceholder.typicode.com/todos" // Guardamos la endpoint en una variable


boton.addEventListener("click", async () => { // agregamos un evento click al presionar el boton
    ulist.innerHTML = ""

    const response = await fetch(todosEndpoint)

    const data = await response.json() // Hacemos la petición a la api, y guardamos el dato en formato json

    data
    .filter(todo => 
        todo.completed === true
    )
// Utilizamos filter para filtrar las tareas completadas y forEach seguidamente para mostrar el titulo de solo las que fueron completadas 
    .forEach(tareas => {
        const li = document.createElement("li") // Lo mostramos creando un elemento li
        li.innerHTML = `Tarea: ${tareas.title} <br>
                        Completada: ${tareas.completed}
                        <br> <br>`
        ulist.appendChild(li) // Luego hacemos un apendchild a la lista no ordenada
    })
    
})