import React from 'react';
import { Link } from "react-router-dom";
import { BiRightArrow } from 'react-icons/bi'

export default function Navigation() {
    return (

        <nav>
            <ul>
                <Link to='/about'><div className='navElementContainer'><li><BiRightArrow />Home // My Work</li></div></Link>
                <Link to='/commissions'><div className='navElementContainer'><li><BiRightArrow />Commissions</li></div></Link>
                <Link to='/contact'><div className='navElementContainer'><li><BiRightArrow />Contact</li></div></Link>
            </ul>
        </nav>

    );
}