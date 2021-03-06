import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/context'

import api from '../../Services/api'

import './style.css'

const Home = () => {

    const { token } = useContext(Context)

    const [modules, setModules] = useState([])
    const [selectedModule, setSelectedModule] = useState({})

    const [classesByModule, setClassesByModule] = useState([])
    
    useEffect(() => {
        api.get('/modules')
            .then(res => setModules(res.data))
            .catch(error => console.log(error))
    }, [])

    function handleSelectModule(module){
        setSelectedModule(module)
        api.get(`/classes-by-modules/${module.id}`)
            .then(res => setClassesByModule(res.data))
            .catch(error => console.log(error))
    }
    
    return (
        <div className="home-container">
            <header className="header-container">
                <h1>Módulos e Aulas</h1>
                {
                    token ?
                    <Link to="/admin/modules">Painel Administrativo</Link> :
                    <Link to="/login">Login</Link> 
                }
            </header>
            <div className="modules-container">
                <h1>Módulos</h1>
                <div className="modules-content">
                    {
                        modules &&
                        modules.length > 0 &&
                        modules.map(module => (
                            <div 
                                key={module.id} 
                                className={ selectedModule.id === module.id ? "module selected" : "module" }
                                onClick={() => handleSelectModule(module)}
                            >
                                <div className="icon-container">
                                    <ion-icon name="folder-outline"></ion-icon>
                                </div>
                                <div className="module-info">
                                    <h2>{module.name}</h2>
                                    <p>{module.quantity_classes} Aulas</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                selectedModule.id &&
                <div className="selected-module">
                    <div className="icon-container">
                        <ion-icon name="folder-open-outline"></ion-icon>
                    </div>
                    <div className="selected-module-container">
                        <h1>{selectedModule.name}</h1>
                        <p>Aqui estão todas as aulas disponíveis nesse módulo</p>
                    </div>
                </div>
            }
            {
                selectedModule.id &&
                <div className="classes-container">
                    {
                        classesByModule &&
                        classesByModule.length > 0 &&
                        classesByModule.map(classByModule => (
                            <div key={classByModule.id} className="class">
                                <img src={classByModule.url_image} alt={classByModule.name} />
                                <h2>{classByModule.name}</h2>
                                <p>{classByModule.description}</p>
                                <div className="date">
                                    <ion-icon name="calendar-outline"></ion-icon>
                                    <p>{new Date(classByModule.date).toLocaleString().replace(',', ' às ')}</p>                                
                                </div>
                                <a href={classByModule.url_video} target="_blank">Assistir aula</a>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Home