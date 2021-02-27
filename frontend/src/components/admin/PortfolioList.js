import React, {useState} from 'react'

import {Table, Button, Image, Modal} from 'react-bootstrap'
import styled from 'styled-components'
import moment from 'moment'

import {useApi} from '../../hooks/useApi'

const PortfolioList = () => {
    const [ show, setShow] = useState(false)
    const {data} = useApi('/portfolio')

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
                                    <Button variant="danger" onClick={()=>setShow(true)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            {/* {Refatorar} */}
                <Modal
                    show={show}
                    onHide={()=> setShow(false)}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Confirm
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete?
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setShow(false)}>Close</Button>
                    <Button variant="danger" onClick={()=>setShow(false)}>Confirm</Button>
                    </Modal.Footer>
                </Modal>
            {/* {Refatorar} */}
        </div>
    )
}

const Logo = styled(Image)`
    height: 100px;
`;

export default PortfolioList
