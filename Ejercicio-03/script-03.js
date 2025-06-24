const boton = document.getElementById("boton")

const ulist = document.createElement("ul")

document.body.appendChild(ulist)

const todosEndpoint = "https://jsonplaceholder.typicode.com/todos"


boton.addEventListener("click", async () => {
    ulist.innerHTML = ""

    const response = await fetch(todosEndpoint)

    const data = await response.json()

    data
    .filter(todo => 
        todo.completed === true
    )

    .forEach(tareas => {
        const li = document.createElement("li")
        li.innerHTML = `Tarea: ${tareas.title} <br>
                        Completada: ${tareas.completed}
                        <br> <br>`
        ulist.appendChild(li)
    })
    
})