import React, { useState, useEffect } from 'react';
import Mole from './Mole';
import EmptySlot from './EmptySlot';

const MoleContainer = ({ score, setScore, gamePaused }) => {
    // Boolean state to control whether a Mole or an EmptySlot is shown
    const [displayMole, setDisplayMole] = useState(false);

    useEffect(() => {
        if (!gamePaused) {
            const timer = setTimeout(() => {
                setDisplayMole(!displayMole); // Toggle between showing and hiding the mole
            }, 2000); // Change this value to adjust timing
            return () => clearTimeout(timer);
        }
    }, [displayMole, gamePaused]);

    return (
        <div>
            {displayMole ?
                <Mole setDisplayMole={setDisplayMole} setScore={setScore} /> :
                <EmptySlot setDisplayMole={setDisplayMole} />
            }
        </div>
    );
};

export default MoleContainer;
