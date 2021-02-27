import React from 'react'

import {Table, Button, Image} from 'react-bootstrap'
import styled from 'styled-components'

const PortfolioList = () => {
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
                    <tr>
                        <td>
                            <Logo src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg" thumbnail />
                        </td>
                        <td>Do Zero ao Fullstack na Udemy com MERN</td>
                        <td>2020-12-23</td>
                        <td>
                            <Button variant="info">Edit</Button>
                            <Button variant="danger">Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>My Portfolio</td>
                        <td>2020-12-23</td>
                        <td>
                            <Button variant="info">Edit</Button>
                            <Button variant="danger">Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Novo Projeto em Python</td>
                        <td>2020-12-23</td>
                        <td>
                            <Button variant="info">Edit</Button>
                            <Button variant="danger">Delete</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

const Logo = styled(Image)`
    height: 100px;
`;

export default PortfolioList
