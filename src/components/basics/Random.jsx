import React from 'react'

export default props => {
    const { min, max } = props
    
    let randomNumber = Math.random(min, max)
    randomNumber = randomNumber * 100
    randomNumber = Math.round(randomNumber)
    
    return (
        <div>
            <h1>{randomNumber}</h1>
        </div>
    )

}
