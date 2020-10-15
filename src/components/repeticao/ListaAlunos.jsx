import React from 'react'
import alunos from '../../data/alunos'

export default props=>{
    const lis = alunos.map(aluno =>{
        return (
            <li key={aluno.id}>
               {aluno.id}) {aluno.nome} -> {aluno.note}
            </li>
        );
    });
    
    return(
        <div>
            <ul>
               {lis}
            </ul>
        </div>
    )
}