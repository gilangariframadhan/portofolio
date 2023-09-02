import React, { useState, useEffect } from 'react';
import '@/app/body.css';

const Body = () => {
    const fullText = 'Hello My Name Is Gilang Arif Ramadhan';
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText(prev => prev + fullText.charAt(index));
                setIndex(prevIndex => prevIndex + 1);
            }, 75);
            return () => clearTimeout(timeout);
        }
    }, [text, index]);

    return (
        <div className='body'>
            <h1 className={`animated-name ${text.length === fullText.length ? 'finished' : 'typing'}`}>
                {text}
            </h1>
            <h2>Welcome to portofolio</h2>
        </div>
    );
}

export default Body;