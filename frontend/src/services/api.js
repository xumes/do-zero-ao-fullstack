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

export const editItem = (slug, {title,description,longDescription, image, technologies}) => {
    axios
        .patch(`/api/portfolio/${slug}`, {
            title, description, longDescription, image, technologies
        })
        .then(res=> {
            console.log("Alterado com sucesso", res)
            return res
        })
        .catch(e=> {
            console.log("Erro", e)
            return e
        })
}

export const addItem = ({title,description,longDescription, image, technologies}) => {
    axios
        .post(`/api/portfolio`, {
            title, description, longDescription, image, technologies
        })
        .then(res=> {
            console.log("Adicionado com sucesso", res)
            return res
        })
        .catch(e=> {
            console.log("Erro", e)
            return e
        })
}
