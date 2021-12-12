import './style.css'

const Table = ({ columns, data, handleEdit, handleDelete }) => {

    return (
        <table className="table">
            <thead>
                <tr>
                    {
                        columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((data, index) => {
                        const values = Object.values(data)
                        return (
                            <tr key={index}>
                                {
                                    values.map(field => (
                                        <td key={`${field}:${index}`}>{field}</td>
                                    ))
                                }
                                {
                                    columns.includes('Ações') &&
                                    <td>
                                        {
                                            handleEdit &&
                                            <button onClick={() => handleEdit(data)} className='btn-edit'>Editar</button>
                                        }
                                        {
                                            handleDelete &&
                                            <button onClick={() => handleDelete(data)} className='btn-delete'>Excluir</button>
                                        }
                                    </td>
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table