//import relavito
import './index.css'
//elemento que representa o dom html para renderizar as coisas
import ReactDom from 'react-dom'
//import necessário para usar jsx
import React from 'react'

import App from './App'

const root = document.getElementById('root')
ReactDom.render(
    <App/>,root)
