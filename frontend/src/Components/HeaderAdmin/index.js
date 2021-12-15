import { Link } from 'react-router-dom'

import './style.css'

const HeaderAdmin = ({ page }) => {
    return (
        <header className="header-admin">
            <h1>Painel Administrativo</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link className={page === 'modules' ? 'selected' : undefined} to="/admin/modules">Módulos</Link></li>
                <li><Link className={page === 'classes' ? 'selected' : undefined} to="/admin/classes">Aulas</Link></li>
                <li><Link className={page === 'admins' ? 'selected' : undefined} to="/admin/admins">Usuários</Link></li>
            </ul>
        </header>
    )
}

export default HeaderAdmin