import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function ItemModal(props) {

    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    const handleClose = () => setShow(false);

    function handleShow() {
        setFullscreen("lg-down");
        setShow(true);
    }


    return <div className={props.classe}>

        <button onClick={handleShow} className="botao-modal">

            <div className="itensVideo">
                <div className="playerDiv">
                    <img src={props.imagem} width="100%" className="playerImagem" />
                </div>
                <h2 className="subtitle">
                    {props.titulo}
                </h2>
            </div>
        </button>

        <Modal size="xl" show={show} fullscreen={fullscreen} onHide={handleClose} animation={true} centered>
            <Modal.Header closeButton>
                <Modal.Title>{props.titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex align-items-center justify-content-center">
                <div className="playerModal d-flex align-items-center justify-content-center">
                    <iframe
                        src={props.url}
                        title={props.titulo}
                        controls
                        className="playerVideo"
                        allowfullscreen="allowfullscreen"
                        mozallowfullscreen="mozallowfullscreen"
                        msallowfullscreen="msallowfullscreen"
                        oallowfullscreen="oallowfullscreen"
                        webkitallowfullscreen="webkitallowfullscreen"></iframe>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>

    </div>
}