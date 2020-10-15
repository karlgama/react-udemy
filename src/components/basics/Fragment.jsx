import React from 'react'

export default function Fragment(props) {
    return(
        //React.Fragment ou <> servem para 
        //renderizar o componente sem ter uma div em volta
        <React.Fragment>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </React.Fragment>
    )
}