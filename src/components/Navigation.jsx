import React from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowForward } from 'react-icons/io'

export default function Navigation() {
    return (

        <nav>
            <ul>
                <li>
                    <IoIosArrowForward />
                    <Link to='/about'>About me</Link>
                </li>
                <li>
                    <IoIosArrowForward />
                    <Link to='/commissions'>Commissions</Link>
                </li>
                <li>
                    <IoIosArrowForward />
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            
        </nav>

    );
}