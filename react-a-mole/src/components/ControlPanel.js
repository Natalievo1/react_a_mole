import React from "react";

const ControlPanel = ({ onStart, onPause, onReset, isPaused }) => {
    return (
        <div>
            <button onClick={onStart}>Start Game</button>
            <button onClick={onPause}>{isPaused ? 'Resume' : 'Pause'}</button>
            <button onClick={onReset}>Reset Game</button>
        </div>
    );
};

export default ControlPanel;