import React, { useState } from "react";

import { Carousel } from "react-bootstrap";

import { videosPortfolio } from "../../data/portfolioVideos";
import ItemModal from "../ItemModal";

import './style/carrosel.css';

export default function Carrosel() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="content">

            <Carousel className="carousel">
                {videosPortfolio.map((item) => (

                    <Carousel.Item className="itemCarousel">


                        <ItemModal imagem={item.imagem} titulo={item.titulo} url={item.url} />

                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}