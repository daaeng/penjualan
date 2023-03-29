import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap';

const Modet = () => {
    const [mshow, setmshow] = useState(false);

    const handleClose = () => setmshow(false);
    const handleShow = () => setmshow(true);
  
    
    return(
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal mshow={mshow} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Modet