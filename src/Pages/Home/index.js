import React from "react";
import './styles/home.css';

export default function Home() {
    return (
        <div id="home">
            <div className="content">
                <h1 className="title">
                    Hello, I'm Caique Nerivan
                </h1>
                <h2 className="subtitle">
                    Video Editor | Social Media | Motion Graphics
                </h2>
                <div className="playerDiv">
                    <iframe
                        className="playerVideo"
                        src="https://www.youtube.com/embed/qq2Q4MPyp74"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    >

                    </iframe>
                </div>

            </div>
        </div>
    )
}