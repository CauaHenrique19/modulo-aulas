import { useState, useContext } from 'react'
import { Context } from '../../Context/context'
import { useNavigate } from 'react-router-dom'

import api from '../../Services/api'

import './style.css'

const Login = () => {

    const { setUser, setToken } = useContext(Context)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    function handleLogin() {
        const user = {
            email,
            password
        }

        api.post('/login', user)
            .then(res => {
                if (!res.data.error) {
                    localStorage.setItem('modulo_aulas_token', res.data.token)
                    localStorage.setItem('modulo_aulas_user', JSON.stringify(res.data.admin))
                    setUser(res.data.admin)
                    setToken(res.data.token)
                    navigate('/admin/')
                }
                else {
                    console.log(res.data)
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="login-container">
            <div className="form-login">
                <h1>Painel Administrtivo</h1>
                <div className="form-login-content">
                    <div className="input-container">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite o email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Digite a senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button onClick={handleLogin}>Entrar</button>
                </div>
            </div>
        </div>
    )
}

export default Login