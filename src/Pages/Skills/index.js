import React from "react";
import ItemModal from "../../Components/ItemModal";


import { videos } from "../../data/skillsVideos";

import './style/skills.css';

export default function Skills() {


    return (
        <div id="skills">
            <div className="content">
                <h1 className="title">
                    Skills
                </h1>

                <div className="itensSkills">

                    {videos.map((item) => (
                        <ItemModal imagem={item.imagem} titulo={item.titulo} url={item.url} classe="itensSkills" />

                    ))}
                </div>


            </div>

        </div>
    );
}