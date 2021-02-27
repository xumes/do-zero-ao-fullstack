import React, {useState} from 'react'

import {Table, Button, Image, Container} from 'react-bootstrap'
import styled from 'styled-components'
import moment from 'moment'

import {useApi} from '../../hooks/useApi'
import Dialog from './Dialog'
import PortfolioForm from './PortfolioForm'

const PortfolioList = () => {
    const [action, setAction] = useState({
        del: {
            header: 'Confirm Delete?',
            btnVariant: 'danger',
            btnLabel: 'Confirm?',
            body: 'Are you sure you want to delete it?'
        },
        edit: {
            header: 'Edit Portfolio',
            btnVariant: 'primary',
            btnLabel: 'Save',
            body: <PortfolioForm />
        },
        add: {
            header: 'Add New Portfolio',
            btnVariant: 'primary',
            btnLabel: 'Save',
            body: <PortfolioForm />
        }
    })
    const [currentAction, setCurrentAction] = useState({
        header: '',
        btnVariant:'',
        btnLabel: '',
        body: ''
    })
    const [show, setShow] = useState(false)
    const {data} = useApi('/portfolio')

    const handleShow = (slug, actn) => {
        setCurrentAction(actn)
        setShow(true)
    }

    return(
        <Container>
            <Button variant="primary" size="lg" onClick={()=>handleShow(null, action.add)}>Add New</Button>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {data?.data?.map(item => {
                        return (
                            <tr>
                                <td>
                                    <Logo src={item.image} thumbnail />
                                </td>
                                <td>{item.title}</td>
                                <td>{moment(item.createdAt).format("MMM-YYYY")}</td>
                                <td>
                                    <Button variant="info" onClick={() => handleShow(item.slug, action.edit)}>Edit</Button>
                                    <Button variant="danger" onClick={() => handleShow(item.slug, action.del)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            <Dialog show={show} setShow={setShow} currentAction={currentAction}>
                {currentAction.body}
            </Dialog>
        </Container>
    )
}

const Logo = styled(Image)`
    height: 100px;
`;

export default PortfolioList
