import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    validateStatus: () => true
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('modulo_aulas_token')
    config.headers['Authorization'] = `Bearer ${token}`
    return config
})

export default api