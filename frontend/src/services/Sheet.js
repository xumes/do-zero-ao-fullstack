import axios from 'axios'

export const save = (data) => {
    const config = {
        method: 'post',
        url: 'https://sheet.best/api/sheets/a0a7d7bb-3574-487b-a0a3-442a68dcb108',
        headers: {
            "Content-Type": "application/json",
        },
        data
    };

    return axios(config)
        .then(res => {
            console.log("Dados da planilha", res)
            return true
        })
        .catch(err => {
            console.log(err)
            return false
        })
}
