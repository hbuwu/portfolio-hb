import React from 'react';
import Navigation from './Navigation';

export default function Header() {
    return (
        <header>
            <img src='./images/logo.png' alt='Hanori Logo' className="headerLogo"></img>
            <Navigation />
        </header>
    );
}