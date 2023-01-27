import React from "react";
import './styles/about.css';
import eu from '../../assets/eu.jpg';

export default function About() {
    return (
        <div id="about">
            <div className="content">
                <h1 className="title">
                    About
                </h1>

                <img src={eu} className="fotoCaique" alt="Foto do desenvolvedor Caique Nerivan" />

                <p>
                    Hi, my name is Caique Nerivan, I'm 28 years old, and I am a video editor.
                </p>
                <p>
                    I started editing videos 2 years ago, while I was studying at <a href="https://www.saga.com.br/?utm_campaign=ilabs%20%7C%20protecao%20da%20marca%20%7C%20saga%20oficial%20%7C%20SEARCH%20%7C%20cold%20%7C%20CPA%20%7C%202022-08-17&utm_content=escola%20saga&utm_term=01%20-%20cold%20%7C%20palavra%20chave%20I%20saga&utm_medium=paid-traffic&utm_source=g&gclid=CjwKCAiA5sieBhBnEiwAR9oh2kaH8UxFJZHraRfigH6HqUGOswXmdUClaKunVrA_whDE8LMn3Iae8RoCCYAQAvD_BwE" target="_blank" className="links">
                        Saga
                    </a>.
                </p>
                
                <p>
                    I work mostly with short videos for tiktok, reels, youtube shorts, and YouTube long videos.
                </p>
                <p>
                    I also work with motion graphics, as intro for YouTube channel, hubs and waiting screens for live streams, lyric video or other types of animations.
                </p>
                <p>
                    I am also a developer, you can find my dev portfolio <a href="https://nerivan.dev/" target="_blank" className="links">
                        Here </a> or my you can look at my <a href="https://www.linkedin.com/in/caiquenerivan/" target="_blank" className="links">Linkedin</a> profile.
                </p>
            </div>
        </div>
    );
}