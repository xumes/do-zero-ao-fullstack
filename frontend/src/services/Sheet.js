import axios from 'axios'

const api = axios.create({
    baseURL: 'https://sheet.best/api/sheets/a0a7d7bb-3574-487b-a0a3-442a68dcb108'
})

export default api
