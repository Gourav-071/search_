import React from 'react';
import './ImagesD.css';

const ImagesD = (props) => {
    const image=`https://source.unsplash.com/600x400/?${props.name}`;
  return (
    <>
    <div>
        <div className="head">
        <h2>What Are U Thinking Just Type</h2>
        </div>
        <img src={image} className='image'/>
    </div>
    </>
  );
}

export default ImagesD