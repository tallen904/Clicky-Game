import React from 'react';
import "./styles.css";

const Image = props => {
    const handleClick = () => props.updateImage(props.name)
    return (
        <div key={props.id} className={ props.clicked ? 'clicked' : '' }>
            <img onClick={handleClick} clicked={props.clicked} className='image' alt={props.name} src={props.image}/>
        </div>
    );
};

export default Image;