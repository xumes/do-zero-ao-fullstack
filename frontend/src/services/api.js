import axios from 'axios'

const api = axios.create({
    baseURL: '/api'
})

export default api

export const deleteItem = (slug) => {
    axios
        .delete(`/api/portfolio/${slug}`)
        .then(res=> {
            console.log("Resultado", res)
            return res;
        })
        .catch(e=>{
            console.log("Erro", e)
            return e;
        })
}

export const editItem = (slug) => {
    console.log("Editado no backend", slug)
}
