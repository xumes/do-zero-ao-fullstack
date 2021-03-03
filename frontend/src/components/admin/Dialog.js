import React from 'react'

import {Modal, Button} from 'react-bootstrap'

const Dialog = ({show, setShow, currentAction, children}) => {
    return(
        <Modal
            animation={false}
            show={show}
            onHide={()=> setShow(false)}
            backdrop="static"
            keyboard={false}
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {currentAction.header}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={()=>setShow(false)}>Close</Button>
            <Button variant={currentAction.btnVariant} onClick={()=>setShow(false)}>{currentAction.btnLabel}</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Dialog
