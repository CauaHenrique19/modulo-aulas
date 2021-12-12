import { useEffect, useRef, useState } from "react"
import api from '../../../Services/api'

import HeaderAdmin from "../../../Components/HeaderAdmin"
import Modal from "../../../Components/Modal"
import Table from "../../../Components/Table"
import notify from '../../../Utils/notify'
import { ToastContainer } from "react-toastify"

import './style.css'

const Classes = () => {

    const [classes, setClasses] = useState([])
    const [modules, setModules] = useState([])
    // const [selectedClass, setSelectedClass] = useState({})
    
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [moduleId, setModuleId] = useState('')
    const [description, setDescription] = useState('')
    const [urlVideo, setUrlVideo] = useState('')
    const [keyImage, setKeyImage] = useState('')
    const [urlImage, setUrlImage] = useState('')
    const [date, setDate] = useState('')

    const [image, setImage] = useState(null)

    const [viewModal, setViewModal] = useState(false)
    const [viewModalConfirmation, setViewModalConfirmation] = useState(false)

    const fileInput = useRef(null)

    useEffect(() => {
        api.get('/classes')
            .then(res => setClasses(res.data))
            .catch(error => notify(error.error, 'error'))

        api.get('/modules')
            .then(res => setModules(res.data))
            .catch(error => notify(error.error, 'error'))
    }, [])

    function handleSubmit(classData){
        if(id && name){
            editClass(classData)
        }
        else if(!name){
            deleteModule()
        }
        else{
            createClass()
        }
    }

    function createClass(){
        const classFormData = new FormData()
        classFormData.append('name', name)
        classFormData.append('description', description)
        classFormData.append('module_id', moduleId)
        classFormData.append('url_video', urlVideo)
        classFormData.append('url_image', urlImage)
        classFormData.append('key_image', keyImage)
        classFormData.append('date', date)
        classFormData.append('image', image)

        api.post('/classes', classFormData)
            .then(res => {
                if(res.status === 200){
                    classes.push({ ...res.data, module_name: 'oie' })
                    setClasses([...classes])
                    closeModal(setViewModal)
                    notify('Aula criada com sucesso!', 'success')
                }
            })
            .catch(error => notify(error.error, 'error'))
    }

    function editClass(){
        const classFormData = new FormData()
        classFormData.append('id', id)
        classFormData.append('name', name)
        classFormData.append('description', description)
        classFormData.append('module_id', moduleId)
        classFormData.append('url_video', urlVideo)
        classFormData.append('url_image', urlImage)
        classFormData.append('key_image', keyImage)
        classFormData.append('date', date)

        if(image.name){
            classFormData.append('image', image)
        }

        api.put('/classes', classFormData)
            .then(res => {
                if(res.status === 200){
                    const index = classes.findIndex(classFind => classFind.id === id)
                    classes[index] = {
                        ...res.data,
                        module_name: 'Maneirinho fala tu'
                    }
                    setClasses([...classes])
                    closeModal(setViewModal)
                    notify('Aula atualizada com sucesso!', 'success')
                }
                else{
                    notify(res.data.error, 'error')
                }
            })
            .catch(error => notify(error.error, 'error'))
    }

    function deleteModule(){
        const deleteData = {
            id,
            key_image: keyImage
        }

        api.delete('/classes', { data: deleteData })
            .then(res => {
                if(res.status === 200){
                    const index = classes.findIndex(classFind => classFind.id === id)
                    classes.splice(index, 1)
                    setClasses([...classes])
                    closeModal(setViewModalConfirmation)
                    notify(res.data.message, 'success')
                }
                else{
                    notify(res.data.error, 'error')
                }
            })
            .catch(error => notify(error.error, 'error'))
    }

    function closeModal(setState){
        setState(false)
        setId('')
        setName('')
        setModuleId('')
        setDescription('')
        setUrlVideo('')
        setUrlImage('')
        setKeyImage('')
        setDate('')
        setImage(null)
    }

    return (
        <div className="admin-classes-container">
            <HeaderAdmin page='classes' />
            <div className="admin-classes-content">
                <div className="header-admin-modules">
                    <h1>Aulas</h1>
                    <button 
                        onClick={() => {
                            setViewModal(true)
                        }} 
                    >
                        <ion-icon name="add-outline"></ion-icon>
                        Nova Aula
                    </button>
                </div>
                <Table 
                    columns={[
                        { label: 'Nome', name: 'name' },
                        { label: 'Módulo', name: 'module_name' },
                        { label: 'Descrição', name: 'description' },
                        { label: 'Vídeo', name: 'url_video' },
                        { label: 'Imagem', name: 'url_image' },
                        { label: 'Data', name: 'date' },
                        { label: 'Ações', name: 'actions' }
                    ]}
                    data={classes}
                    handleEdit={
                        (classData) => {
                            setViewModal(true)
                            setId(classData.id)
                            setName(classData.name)
                            setDescription(classData.description)
                            setModuleId(classData.module_id)
                            setUrlImage(classData.url_image)
                            setKeyImage(classData.key_image)

                            const date = new Date(classData.date)
                            date.setHours(date.getHours() - 3)
                            const dateString = date.toISOString().substring(0, 16)
                            setDate(dateString)

                            setUrlVideo(classData.url_video)
                            setImage(classData.url_image)
                        }
                    }
                    handleDelete={
                        (classData) => {
                            setViewModalConfirmation(true)
                            setId(classData.id)
                            setKeyImage(classData.key_image)
                        }
                    }
                />
            </div>
            {
                viewModal &&
                <Modal
                    viewHeader={true}
                    headerText="Editar Aula"
                    handleClose={() => closeModal(setViewModal)}
                    handleCancel={() => closeModal(setViewModal)}
                    handleSubmit={handleSubmit}
                >
                    <div className="row">
                        <div className="input-container">
                            <label>Nome</label>
                            <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="input-container">
                            <label>Módulo</label>
                            <select value={moduleId} onChange={e => setModuleId(e.target.value)}>
                                <option value="">Escolha o módulo</option>
                                {
                                    modules &&
                                    modules.length > 0 &&
                                    modules.map(module => <option key={module.id} value={module.id}>{module.name}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-container">
                            <label>Descrição</label>
                            <input type="text" placeholder="Nome" value={description} onChange={e => setDescription(e.target.value)} />
                        </div>
                        <div className="input-container">
                            <label>Url Vídeo</label>
                            <input type="text" placeholder="Nome" value={urlVideo} onChange={e => setUrlVideo(e.target.value)} />
                        </div>
                    </div>
                    <div className="input-container">
                        <label>Data</label>
                        <input type="datetime-local" placeholder="Nome" value={date} onChange={e => setDate(e.target.value)} />
                    </div>
                    <div className="image-input">
                        <label>Imagem</label>
                        <div className="image-form" onClick={() => fileInput.current && fileInput.current.click()}>
                            {!image && <ion-icon name="image-outline"></ion-icon>}
                            {!image && <h1>Clique para selecionar uma imagem de perfil</h1>}
                            {image && <img src={ image.name ? URL.createObjectURL(image) : `${image}?${Date.now()}`} alt="ImageUser" />}
                        </div>
                        <input ref={fileInput} onChange={(e) => setImage(e.target.files[0])} type="file" hidden={true} accept="image/*" />
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
                        <h1>Tem certeza que deseja excluir essa aula?</h1>
                    </div>
                </Modal>
            }
            <ToastContainer />
        </div>
    )
}

export default Classes