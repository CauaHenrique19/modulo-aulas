import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'

import HeaderAdmin from '../../../Components/HeaderAdmin'
import Modal from '../../../Components/Modal'
import Table from '../../../Components/Table'
import api from '../../../Services/api'
import notify from '../../../Utils/notify'

import './style.css'

const Admins = () => {

    const [admins, setAdmins] = useState([])

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [viewModal, setViewModal] = useState(false)
    const [viewModalConfirmation, setViewModalConfirmation] = useState(false)

    useEffect(() => {
        api.get('/admins')
            .then(res => setAdmins(res.data))
            .catch(error => console.log(error.message))
    }, [])

    function createAdmin(){
        const admin = {
            name,
            email,
            password,
            confirmPassword
        }

        api.post('/signup', admin)
            .then(res => {
                if(res.status === 200){
                    const newAdmin = { ...res.data, quantity_classes: 0 }
                    admins.push(newAdmin)
                    setAdmins([...admins])
                    closeModal(setViewModal)
                    notify('Administrador criado com sucesso!', 'success')
                }
                else{
                    notify(res.data.error, 'error')
                }
            })
            .catch(error => notify(error.statusText, 'error'))
    }

    function deleteAdmin(){
        const deleteData = {
            id
        }

        api.delete(`/admins`, { data: deleteData })
            .then(res => {
                if(res.status === 200){
                    const index = admins.findIndex(admin => admin.id === id)
                    admins.splice(index, 1)
                    setAdmins([...admins])
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
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <div className="admins-admin-container">
            <HeaderAdmin page='admins' />
            <div className="admin-admins-content">
                <div className="header-admin-admins">
                    <h1>Administradores</h1>
                    <button
                        onClick={() => {
                            setViewModal(true)
                        }}
                    >
                        <ion-icon name="add-outline"></ion-icon>
                        Novo Administrador
                    </button>
                </div>
                <Table 
                    columns={
                        [
                            { label: 'Id', name: 'id' },
                            { label: 'Nome', name: 'name' },
                            { label: 'Email', name: 'email' },
                            { label: 'Ações', name: 'actions' }
                        ]
                    }
                    data={admins}
                    handleDelete={
                        (admin) => {
                            setViewModalConfirmation(true)
                            setId(admin.id)
                        }
                    }
                />
            </div>
            {
                viewModal &&
                <Modal
                    viewHeader={true}
                    headerText="Criar Administrador"
                    handleClose={() => closeModal(setViewModal)}
                    handleCancel={() => closeModal(setViewModal)}
                    handleSubmit={createAdmin}
                >
                    <div className="input-container">
                        <label>Nome</label>
                        <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <label>Email</label>
                        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <label>Senha</label>
                        <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <label>Confirmação de Senha</label>
                        <input type="password" placeholder="Senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
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
                    handleSubmit={deleteAdmin}
                >
                    <div className="message-container">
                        <h1>Tem certeza que deseja excluir esse administrador?</h1>
                    </div>
                </Modal>
            }
            <ToastContainer />
        </div>
    )
}

export default Admins