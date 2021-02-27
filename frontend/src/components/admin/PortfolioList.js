import React, {useState} from 'react'

import {Table, Button, Image} from 'react-bootstrap'
import styled from 'styled-components'
import moment from 'moment'

import {useApi} from '../../hooks/useApi'
import Dialog from './Dialog'

const PortfolioList = () => {
    const [action, setAction] = useState({
        del: {
            header: 'Confirm Delete?',
            btnVariant: 'danger',
            btnLabel: 'Confirm?'
        },
        edit: {
            header: 'Edit Portfolio',
            btnVariant: 'primary',
            btnLabel: 'Save'
        },
        add: {
            header: 'Add New Portfolio',
            btnVariant: 'primary',
            btnLabel: 'Save'
        }
    })
    const [currentAction, setCurrentAction] = useState({
        header: '',
        btnVariant:'',
        btnLabel: ''
    })
    const [show, setShow] = useState(false)
    const {data} = useApi('/portfolio')

    const handleShow = (slug, actn) => {
        setCurrentAction(actn)
        setShow(true)
    }

    return(
        <div>
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
                                    <Button variant="info">Edit</Button>
                                    <Button variant="danger" onClick={() => handleShow(item.slug, action.del)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            <Dialog show={show} setShow={setShow} currentAction={currentAction} />
        </div>
    )
}

const Logo = styled(Image)`
    height: 100px;
`;

export default PortfolioList
