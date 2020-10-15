import'./Card.css'
import React from 'react'

export default props => {
    const cardStyle = {
        backgroundColor: props.color,
        borderColor: props.color
    }
    return (
        <div className="card" style={cardStyle}>
            <div className="title"><h1>{props.title}</h1></div>
            <div className="content">
                    {props.children}
            </div>
        </div>
    )
}