import React from 'react';
export default function MyTable() {
    const data = [
        { id: 1, produto: 'Produto 1', preço: 10.99, desc: 'Descrição 1' },
        { id: 2, produto: 'Produto 2', preço: 20.99, desc: 'Descrição 2' },
        { id: 3, produto: 'Produto 3', preço: 15.99, desc: 'Descrição 3' },
        // Adicione mais dados conforme necessário
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.produto}</td>
                        <td>{item.preço}</td>
                        <td>{item.desc}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}