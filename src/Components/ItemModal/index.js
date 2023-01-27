import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function ItemModal(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return <>

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

        <Modal show={show} onHide={handleClose} animation={true} centered>
            <Modal.Header closeButton>
                <Modal.Title>{props.titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <iframe src={props.url} title={props.titulo} controls allowfullscreen></iframe>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>

    </>
}