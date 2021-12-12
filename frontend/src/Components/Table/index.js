import React from 'react'
import './style.css'

const Table = ({ columns, data, handleEdit, handleDelete }) => {

    return (
        <table className="table">
            <thead>
                <tr>
                    {
                        columns.map((column, index) => (
                            <th key={index}>{column.label}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((data, index) => (
                        <tr key={index}>
                            {
                                columns.map(column => (
                                    <React.Fragment key={`${column.name}:${index}`}>
                                        {
                                            column.name === 'actions' ?
                                            <td>
                                                {
                                                    handleEdit &&
                                                    <button onClick={() => handleEdit(data)} className='btn-edit'>Editar</button>
                                                }
                                                {
                                                    handleDelete &&
                                                    <button onClick={() => handleDelete(data)} className='btn-delete'>Excluir</button>
                                                }
                                            </td> :
                                            column.name === 'url_image' ?
                                            <td>
                                                <img src={`${data[column.name]}?${Date.now()}`} alt={data[column.name]} />
                                            </td> :
                                            column.name === 'date' ?
                                            <td>
                                                {new Date(data[column.name]).toLocaleString().replace(',', ' às ')}
                                            </td> :
                                            <td>
                                                {
                                                    data[column.name].length <= 30 ?
                                                    data[column.name] :
                                                    data[column.name].substring(0, 30) + '...'
                                                }
                                            </td>
                                        }
                                    </React.Fragment>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table