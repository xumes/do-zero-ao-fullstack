import axios from 'axios'

export const save = (data) => {
    const config = {
        method: 'post',
        url: process.env.REACT_APP_SPREADSHEET,
        headers: {
            "Content-Type": "application/json",
        },
        data
    };

    console.log("spreadsheet config", config)

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
