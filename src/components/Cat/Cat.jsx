import React from 'react';
import catImg from './cat.jpg';

const Cat = () => {
    const img = catImg;
    return (
        <div>
            hello
            <img src={img} alt="" />
        </div>
    );
};

export default Cat;
