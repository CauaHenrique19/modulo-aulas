import { useEffect, useState } from 'react'
import api from '../../../Services/api'

import { ToastContainer } from 'react-toastify'
import HeaderAdmin from '../../../Components/HeaderAdmin'
import Table from '../../../Components/Table'
import Modal from '../../../Components/Modal'
import notify from '../../../Utils/notify'

import './style.css'

const Modules = () => {

    const [modules, setModules] = useState([])
    const [selectedModule, setSelectedModule] = useState({}) 

    const [id, setId] = useState('')
    const [name, setName] = useState('')

    const [viewModal, setViewModal] = useState(false)
    const [viewModalConfirmation, setViewModalConfirmation] = useState(false)

    useEffect(() => {
        api.get('/modules')
            .then(res => setModules(res.data))
            .catch(error => console.log(error.message))
    }, [])

    function handleSubmit(module){
        if(id && name){
            editModule(module)
        }
        else if(!name){
            deleteModule()
        }
        else{
            createModule()
        }
    }

    function createModule(){
        const module = {
            name
        }

        api.post('/modules', module)
            .then(res => {
                if(res.status === 200){
                    const newModule = { ...res.data, quantity_classes: 0 }
                    modules.push(newModule)
                    setModules([...modules])
                    closeModal(setViewModal)
                    notify('Módulo criado com sucesso!', 'success')
                }
                else{
                    notify(res.data.error, 'error')
                }
            })
            .catch(error => notify(error.statusText, 'error'))
    }

    function editModule(){
        const module = {
            id,
            name
        }

        api.put('/modules', module)
            .then(res => {
                if(res.status === 200){
                    const index = modules.findIndex(moduleFind => moduleFind.id === id)
                    modules[index] = {
                        ...res.data,
                        quantity_classes: selectedModule.quantity_classes
                    }
                    setModules([...modules])
                    closeModal(setViewModal)
                    notify('Módulo editado com sucesso!', 'success')
                }
                else{
                    notify(res.data.error, 'error')
                }
            })
            .catch(error => notify(error.statusText, 'error'))
    }

    function deleteModule(){
        api.delete(`/modules/${id}`)
            .then(res => {
                if(res.status === 200){
                    const index = modules.findIndex(moduleFind => moduleFind.id === id)
                    modules.splice(index, 1)
                    setModules([...modules])
                    closeModal(setViewModalConfirmation)
                    notify(res.data.message, 'success')
                }
                else{
                    notify(res.data.error, 'error')
                }
            })
            .catch(error => notify(error.statusText, 'error'))
    }

    function closeModal(setState){
        setState(false)
        setId('')
        setName('')
    }

    return (
        <div className="admin-modules-container">
            <HeaderAdmin page='modules' />
            <div className="admin-modules-content">
                <div className="header-admin-modules">
                    <h1>Módulos</h1>
                    <button 
                        onClick={() => {
                            setViewModal(true)
                        }} 
                    >
                        <ion-icon name="add-outline"></ion-icon>
                        Novo Módulo
                    </button>
                </div>
                <Table 
                    columns={['Id', 'Nome', 'Quantidade de aulas', 'Ações']} 
                    data={modules}
                    handleEdit={
                        (module) => {
                            setViewModal(true)
                            setSelectedModule(module)
                            setName(module.name)
                            setId(module.id)
                        }
                    }
                    handleDelete={
                        (module) => {
                            setViewModalConfirmation(true)
                            setId(module.id)
                        }
                    }
                />
            </div>
            {
                viewModal &&
                <Modal
                    viewHeader={true}
                    headerText="Editar Módulo"
                    handleClose={() => closeModal(setViewModal)}
                    handleCancel={() => closeModal(setViewModal)}
                    handleSubmit={handleSubmit}
                >
                    <div className="input-container">
                        <label>Nome</label>
                        <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                </Modal>
            }
            {
                viewModalConfirmation &&
                <Modal
                    viewHeader={false}
                    submitText='Excluir'
                    handleClose={() => closeModal(setViewModalConfirmation)}
                    handleCancel={() => closeModal(setViewModalConfirmation)}
                    handleSubmit={handleSubmit}
                >
                    <div className="message-container">
                        <h1>Tem certeza que deseja excluir esse módulo?</h1>
                    </div>
                </Modal>
            }
            <ToastContainer />
        </div>
    )
}

export default Modules