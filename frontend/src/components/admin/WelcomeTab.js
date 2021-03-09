import React, {useEffect, useState} from 'react'

import {Container, Card} from 'react-bootstrap'
import {useApi} from '../../hooks/useApi'

const WelcomeTab = () => {
    const {data} = useApi('/portfolio');

    const [qtyItems, setQtyItems] = useState(0)

    useEffect(() => {
        data && setQtyItems(data.data.length)
    }, [data])

    return(
        <Container>
            <Card bg='dark' text='light' className="mb-2 text-center p-3">
                <Card.Header>Welcome!</Card.Header>
                <Card.Body>
                    <Card.Title>Items on our Portfolio</Card.Title>
                    <Card.Text style={{fontSize: 100}}>{qtyItems}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default WelcomeTab
