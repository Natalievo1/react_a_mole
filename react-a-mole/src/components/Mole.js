import React from 'react';
import moleImg from '../assets/mole.png'

const Mole = ({ setDisplayMole, setScore }) => {
    // Handle clicking the mole to increase the score and hide the mole
    const handleClick = () => {
        setScore((prevScore) => prevScore + 1);
        setDisplayMole(false);
    };

    return (
        <div onClick={handleClick}>
            <img src={moleImg} alt="Mole" style={{ width: '100px', cursor: 'pointer' }} />
        </div>
    );
};

export default Mole;

