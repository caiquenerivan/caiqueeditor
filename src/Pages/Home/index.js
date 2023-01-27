import React from "react";
import './styles/home.css';

export default function Home() {
    return (
        <div id="home">
            <div className="content">
                <h1 className="title" id="mainTitle">
                    Hello, I'm Caique Nerivan
                </h1>
                <h2 className="subtitle">
                    Video Editor | Social Media | Motion Graphics
                </h2>
                <div className="playerDiv" id="mainPlayer">
                    <iframe
                        className="playerVideo"
                        src="https://www.youtube.com/embed/qq2Q4MPyp74"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        
                        allowfullscreen="allowfullscreen"
                        mozallowfullscreen="mozallowfullscreen"
                        msallowfullscreen="msallowfullscreen"
                        oallowfullscreen="oallowfullscreen"
                        webkitallowfullscreen="webkitallowfullscreen"

                    >

                    </iframe>
                </div>

            </div>
        </div>
    )
}