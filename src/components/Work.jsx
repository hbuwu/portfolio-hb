import React from 'react';

export default function Work(props) {
    return (
        <div className='containerWork'>
            <a href={props.link}>
                <img src={props.pic} alt={props.alt} />
                <h4>{props.title}</h4>
            </a>
        </div>
    );
};
