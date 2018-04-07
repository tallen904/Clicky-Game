import React from 'react';
import "./styles.css";
import Image from '../Image'

const ImageContainer = props => {
    console.log(props.images)
    return (
        <div className='image-container'>
            {props.images.map(image => <Image updateImage={props.updateImage} {...image} />)}
        </div>
    );
};

export default ImageContainer;