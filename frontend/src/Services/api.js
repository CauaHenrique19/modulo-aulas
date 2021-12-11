import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    validateStatus: () => true
})

api.interceptors.request.use((config) => {
    config.headers['Authorization'] = 'Bearer kaosdkasokdoas'
    return config
})

export default api