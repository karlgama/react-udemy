import React, {useState} from 'react'
//componentes controlados só mudam quando o estado muda
export default props =>{

    const [valor, setValor] = useState('')
    
    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return(
        <div>
            <input value={valor} placeholder="inicial" onChange={quandoMudar}/>
        </div>
    )
}