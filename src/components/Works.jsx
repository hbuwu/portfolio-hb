import React from 'react';
import Work from './Work';
import allWorks from '../data/works.json'

export default function Works() {
    return (
        <div className='worksGrid'>
            {allWorks.map((props, i) => (
                    <Work key={i} {...props} />
                ))}
        </div>
    );
};
