import React from 'react'
import './App.css'

import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import Card from './components/layout/Card'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
//se a função recebe apenas um parametro é possível retirar os parenteses,
// válido apenas para arrow function
//_ indica que o parametro não me interessa
//se tudo será retornado pode se tirar as chaves e o return
export default _ => (
    <div id="app">
        <h1>Fundamentos de React</h1>
        
        <div className="cards">

            <Card title="#7 - Repetição" color="#3a9ad9">
              <TabelaProdutos></TabelaProdutos>
            </Card>
           
            <Card title="#6 - Repetição" color="#ff4c65">
              <ListaAlunos></ListaAlunos>
            </Card>

            <Card title="#5 - componente com filhos" color="#aa44aa">
                <Familia sobrenome="Sauro">
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="Ana"/>
                    <FamiliaMembro nome="Gustavo"/>
                </Familia>
            </Card>

            <Card title="#4 - random" color="#aa44aa">
                <Random min={0} max={100} />
            </Card>
            
            <Card title="#3 - Fragment">
                <Fragment/>
            </Card>

            <Card title="#2 - Com parâmetro">
                <ComParametro title="teste" subtitle="15" />
            </Card>

            <Card title="#1 - Exemplo de card">
                <Primeiro></Primeiro>
            </Card>

        </div>

       
        
    </div>
);

