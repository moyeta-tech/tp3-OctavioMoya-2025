
const { useState } = React


function App(){
    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)
    const [option, setOption] = useState("")
    const [mostrarResultado, setMostrarResultado] = useState("")
    const [botonDisabled, setBotonDisabled] = useState(false)

    function handleSubmit(e){
        e.preventDefault()

        setMostrarResultado(Calcular())
    }
    function handleOption(e){
        const value = e.target.value
        setOption(value)

        if(value === "division" && numero2 === 0){
            setBotonDisabled(true)
        } else {
            setBotonDisabled(false)
        }
    }

    function handleNumero2(e){
        const value = Number(e.target.value)
        setNumero2(value)

        if(option === "division" && numero2 === 0){
            setBotonDisabled(true)
        } else {
            setBotonDisabled(false)
        }
    }

    function Calcular(){
        if(option === "suma"){
            return <h2>El resultado de la suma es: {numero1 + numero2}</h2>
        }
        if(option === "multiplicacion"){
            return <h2>El resultado de la multiplicacion es: {numero1 * numero2}</h2>
        }
        if(option === "resta"){
            return <h2>El resultado de la resta es: {numero1 - numero2}</h2>
        }
        if(option === "division"){
            if(numero2 !== 0) return <h2>El resultado de la division es: {numero1 / numero2}</h2>
        }
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
                <input type="number" name="op1" value={numero1} onChange={(e) => setNumero1(Number(e.target.value))}/>
                    <select value={option} onChange={handleOption}>
                        <option value="">Selecciona una operación</option>
                        <option value="suma" >suma</option>
                        <option value="multiplicacion" >multiplicacion</option>
                        <option value="resta"  >resta</option>
                        <option value="division" >division</option>
                    </select>
                <input type="number" name="op2" value={numero2} onChange={handleNumero2}/>
            <button type="submit" disabled={botonDisabled} >Calcular</button>
        </form>
        {mostrarResultado}
    </>
    )
}