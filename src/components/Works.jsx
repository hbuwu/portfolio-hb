import React from 'react';
import Work from './Work';
import allWorks from '../data/works.json'

export default function Works() {
    return (
        <div className='worksGrid'>
            <Work link='/workplaceholder' pic='./images/logo.png' alt='Dab' title='Nice work'></Work>
            {allWorks.map((props, i) => (
                    <Work key={i} {...props} />
                ))}
        </div>
    );
};
