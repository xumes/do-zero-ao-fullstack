import React from 'react'

import {Modal, Button} from 'react-bootstrap'

const Dialog = ({show, setShow, currentAction}) => {
    return(
        <Modal
            show={show}
            onHide={()=> setShow(false)}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {currentAction.header}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete?
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={()=>setShow(false)}>Close</Button>
            <Button variant={currentAction.brnVariant} onClick={()=>setShow(false)}>{currentAction.btnLabel}</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Dialog
