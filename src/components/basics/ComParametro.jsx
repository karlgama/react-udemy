import React from 'react'

export default function Comparametro(props) {
    const  subtitulo = props.subtitulo
    return (
    <div>
        <h2>{props.titulo}</h2>
        <h3>{subtitulo}</h3>        
    </div>)
}