import React from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowForward } from 'react-icons/io'

export default function Navigation() {
    return (

        <nav>
            <ul>
                <Link to='/about'><li><IoIosArrowForward />Home // My Work</li></Link>
                <Link to='/commissions'><li><IoIosArrowForward />Commissions</li></Link>
                <Link to='/contact'><li><IoIosArrowForward />Contact</li></Link>
            </ul>
        </nav>

    );
}