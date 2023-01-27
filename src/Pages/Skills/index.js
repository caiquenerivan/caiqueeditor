import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ItemModal from "../../Components/ItemModal";


import { videos } from "../../data/videos";

import './style/skills.css';

export default function Skills() {





    return (
        <div id="skills">
            <div className="content">
                <h1 className="title">
                    Skills
                </h1>


                {videos.map((item) => (
                    <ItemModal imagem={item.imagem} titulo={item.titulo} url={item.url} />
                ))}


            </div>

        </div>
    );
}