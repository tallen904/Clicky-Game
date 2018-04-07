import React from 'react';
import "./styles.css";

const Score = props => {
    return (
        <div>
            <h1>Current Score: {props.score} <span className='current-score'>Highest Score: {props.highestScore}</span></h1>
        </div>
    );
};

export default Score;