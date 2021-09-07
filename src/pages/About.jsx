import React from 'react';
import Works from '../components/Works';

export default function About() {
    return (
        <>
            <div className='aboutBody'>
                <div className='aboutIntro'>
                    <h3>Who?!?</h3>
                    <p>
                        Hello! My name is Hendrik, but online I'm known as either Hanori or hb.
                    </p>
                    <h3>Ok sure but what do you do...</h3>
                    <p className='aboutDescription'>
                        I'm a 22 year old graphic designer from Belgium. I have a diverse skillset ranging from <span className='highlightText'>web design</span> to <span className='highlightText'>photo and video editing</span>. However, I'm always up to learn new aspects of web and graphic design! \o/
                    </p>
                    <h3>Some of my work</h3>
                    <Works></Works>
                </div>
            </div>
        </>
    );
}