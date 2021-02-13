import React from 'react'
//comunicacao indireta, o pai passa para o filho uma função que 
//pode ser usada para passar informaçãoes para o pai
export default props =>{
    return (
        <div>
            <div>
                Filho
                <button onClick={
                    function (e) {
                        props.quandoClicar('João', 56, true)
                    }
                }>
                    fornecer informações
                </button>
            </div>
        </div>
    )
}