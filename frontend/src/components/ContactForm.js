import React, {useState} from 'react'
import moment from 'moment'

import styled from 'styled-components'

import {save} from '../services/Sheet'


const ContactForm = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ sucesso, setSucesso ] = useState(false);
    const [ erro, setErro ] = useState(false);

    const resetForm = () => {
        setName('');
        setEmail('')
        setMessage('')
    }

    const contactMeHandler = async (e) => {
        e.preventDefault()

        if ( name === '' || email === '' || message === '') {
            setErro(true)
            return
        }

        const data = {
            Nome: name,
            Email: email,
            Mensagem: message,
            Data: moment().format('DD/MM/YYYY'),
        }

        const result = await save(data);

        if (result) {
            setSucesso(result)
            resetForm();
        }
        else {
            setErro(!result)
        }
    }

    return(
        <Form onSubmit={contactMeHandler}>
            <Input>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                />
            </Input>
            <Input>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                />
            </Input>
            <Input>
                <label>Message:</label>
                <textarea
                    rows='5'
                    value={message}
                    onChange={(e) => {setMessage(e.target.value)}}
                />
            </Input>
            <button type="submit">Submit</button>
            {sucesso && <h4>Mensagem enviada com sucesso!</h4>}
            {erro && <h4>Ocorreu um erro, por favor envie novamente!</h4>}
        </Form>
    )
}


const Input = styled.div`
    display: flex;
    flex-direction: column;
    min-width:60vh;
    label {
        color: white;
        padding-top: 1rem;
    }
    input[type=text] {
        border: 2px 0 solid yellow;
        padding: 12px 20px;
        border-radius: 10%;
        width: 100%;
        height: 100%;
    }
    input:focus {
        background-color: #416CD5;
        color: yellow;
    }
    input[type=email] {
        border: 2px 0 solid yellow;
        padding: 12px 20px;
        border-radius: 10%;
        width: 100%;
        height: 100%;
    }
    textarea {
        width: 100%;
        height: 150px;
        padding: 12px 20px;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        background-color: #f8f8f8;
        resize: none;
    }
    textarea:focus {
        background-color: #416CD5;
        color: yellow;
    }
`;

const Form = styled.form`
    button{
        margin-top: 1rem;
    }
    h4{
        margin-top: 1rem;
    }
    @media (max-width: 1500px) {
        padding: 4rem;
        font-size: 1rem;
    }
`;

export default ContactForm
