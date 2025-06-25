
const { useState } = React

function Enable(){
    const [Enabled, setEnabled] = useState(true)

    return (
        <>
        <button disabled={!Enabled} 
                onClick={() => setEnabled(false)}
        >Izquierdo</button>
        {" "}
        <button disabled={Enabled} 
                onClick={() =>setEnabled(true)}
        >Derecho</button>
        </>
    )
}


function App(){

    return (
        <Enable />
    )
}