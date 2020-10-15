import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default props =>{
    const listaProdutos = produtos.map((produto,id)=>{
        return(
            <tr key={produto.id} className={id % 2 == 0 ? 'par' : '' }>
                <td>{produto.id})</td>
                <td>{produto.nome}</td>
                <td>R${produto.preco.toFixed(2).replace('.',',')}</td>
            </tr>
        );
    });
    return(
        <div className="tabela-produtos">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProdutos}
                </tbody>
            </table>
               
            
        </div>
    );
}