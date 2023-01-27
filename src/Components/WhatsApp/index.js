import React from "react";
import { AiOutlineWhatsApp } from 'react-icons/ai';

import './style/wp.css';


export default function WhatsApp(){
    return(
        <div id="wp" >
            <a href="https://wa.me/5511947065991" target="_blank" rel="noreferrer">
                <AiOutlineWhatsApp className="icone"/>
            </a>
        </div>
    );
}