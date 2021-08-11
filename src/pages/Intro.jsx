import React from 'react';
import { Link } from 'react-router-dom';

export default function Intro() {
    return (
        <>
            <div className='introScreen'>
                <div className='introBox'>
                    <img src='./images/logo.png' alt='Hanori Logo' className="introLogo"></img>
                    <p className='introSubTitle'>Graphic Design</p>
                    <Link to='/about' className='introButton'>Continue</Link>
                </div>
            </div>
        </>
    );
}