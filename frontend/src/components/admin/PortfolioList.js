import React, {useState} from 'react'

import {Table, Button, Image, Container} from 'react-bootstrap'
import styled from 'styled-components'
import moment from 'moment'

import {useApi} from '../../hooks/useApi'
import Dialog from './Dialog'
import PortfolioForm from './PortfolioForm'

const PortfolioList = () => {
    const [title, setTitle] = useState()
    const [shortDescription, setShortDescription] = useState()
    const [longDescription, setLongDescription] = useState()
    const [image, setImage] = useState()
    const [slug, setSlug] = useState()
    const [action] = useState({
        del: {
            header: 'Confirm Delete?',
            btnVariant: 'danger',
            btnLabel: 'Confirm?',
            showBody: true,
            body: 'Are you sure you want to delete it?'
        },
        edit: {
            header: 'Edit Portfolio',
            btnVariant: 'primary',
            btnLabel: 'Save',
            showBody: false
        },
        add: {
            header: 'Add New Portfolio',
            btnVariant: 'primary',
            btnLabel: 'Save',
            showbody: false
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

    const handleShow = (portfolio, actn) => {
        setCurrentAction(actn)
        setShow(true)
        setTitle(portfolio.title)
        setShortDescription(portfolio.description)
        setLongDescription(portfolio.longDescription)
        setImage(portfolio.image)
        setSlug(portfolio.slug)
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
                                    <Button variant="info" onClick={() => handleShow(item, action.edit)}>Edit</Button>
                                    <Button variant="danger" onClick={() => handleShow(item, action.del)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            <Dialog show={show} setShow={setShow} currentAction={currentAction}>
                {currentAction.showBody && currentAction.body}

                {!currentAction.showBody && (
                    <PortfolioForm
                        title={title}
                        setTitle={setTitle}
                        shortDescription={shortDescription}
                        setShortDescription={setShortDescription}
                        longDescription={longDescription}
                        setLongDescription={setLongDescription}
                        image={image}
                        setImage={setImage}
                        slug={slug}
                    />
                )}
            </Dialog>
        </Container>
    )
}

const Logo = styled(Image)`
    height: 100px;
`;

export default PortfolioList
