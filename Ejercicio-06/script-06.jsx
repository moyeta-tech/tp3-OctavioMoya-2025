const { useState } = React

function App(){
    const [peso, setPeso] = useState(0) 
    const [altura, setAltura] = useState(0)
    const [mensaje, setMensaje] = useState("")

    let msg = <p></p> // Variable para mostrar mensajes

    function handleAltura(e){ // Funcion para la altura y setear su valor
        const value = parseFloat(e.target.value)
        setAltura(value)
        if(altura <= 0){
            msg = <p style={{color: "white"}}>Solo valores positivos</p>
            setMensaje(msg) // Validamos que sean valores positivos
            return
        }  
        
    }

    function handlePeso(e){
        const value = parseFloat(e.target.value)
        setPeso(value)
        if(peso <= 0){
            msg = <p style={{color: "white"}}>Solo valores positivos</p>
            setMensaje(msg)
            return
        }  
        
    }

    function Calcular(){ // Function para calcular el IMC y mostrar un mensaje disntito dependiendo al resultado
        const resultado = peso / (altura * altura)

        if(resultado < 18.5){
            msg = <p style={{color: "yellow"}}>Su IMC es bajo</p>
            return setMensaje(msg)
        }
        if(resultado >= 18.5 && resultado <= 24.9){
            msg = <p style={{color: "green"}}>¡Su IMC es el ideal!</p>
            return setMensaje(msg)
        }
        if(resultado >= 25 && resultado <= 29.9){
            msg = <p style={{color: "orange"}}>Su IMC indica un nivel de sobrepeso</p>
            return setMensaje(msg)
        }
         if(resultado >= 30){
            msg = <p style={{color: "red"}}>Su IMC indica un nivel de obesidad</p>
            return setMensaje(msg)
        }

    }

    return ( // Devuelve un form con sus elementos
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <h1 style={{color: "white"}}>Calcular IMC</h1>
                <label htmlFor="peso" style={{color: "white"}}>Peso: </label>
                <input type="number" id="peso" value={peso} onChange={handlePeso} placeholder="Su peso en kg" />
                <label htmlFor="altura" style={{color: "white"}}>Altura: </label>
                <input type="number" id="altura" value={altura} onChange={handleAltura} placeholder="Su altura en metros"/>
                <button type="submit" onClick={Calcular}>Calcular</button>
            </form>
            {mensaje /* Mostramos el mensaje fuera del form */}
        </>
    )
}