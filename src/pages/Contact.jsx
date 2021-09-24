import React from 'react';
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

export default function Contact() {
    return (
        <div className='contactContainer'>
            <h1>Contact</h1>
            <div className='contactBox'>
                <div className='contactElement'>
                <a href="https://github.com/hbuwu" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={100}></FaGithub>
                    <h3>Github</h3>
                </a>
                </div>
                <div className='contactElement'>
                    <a href="https://twitter.com/hbuwu" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={100}></FaTwitter>
                        <h3>Twitter</h3>
                    </a>
                </div>
                <div className='contactElement'>
                    <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                        <FaDiscord size={100}></FaDiscord>
                        <h3>hb~#7929</h3>
                    </a>
                </div>
            </div>

        </div>
    )
}