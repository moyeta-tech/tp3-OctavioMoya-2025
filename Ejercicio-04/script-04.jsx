
const { useState } = React

function Enable(){
    const [Enabled, setEnabled] = useState(true) // Usamos estados con react e inicializamos Enabled como true

    return (
        <>
        <button disabled={!Enabled} 
                onClick={() => setEnabled(false)} // al atributo disabled le pasamos !Enabled osea false y seteamos como false en el evento onClick
        >Izquierdo</button>
        {" "}
        <button disabled={Enabled} 
                onClick={() =>setEnabled(true)} // Hacemos el mismo procedimiento pero para que sea true
        >Derecho</button>
        </>
    )
}


function App(){

    return (
        <Enable /> // Renderizamos Enable
    )
}