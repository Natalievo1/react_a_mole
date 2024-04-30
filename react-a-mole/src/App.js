import React, { useState } from 'react';
import MoleContainer from './components/MoleContainer';
import ControlPanel from './components/ControlPanel';

const App = () => {
    // State for the score
    const [score, setScore] = useState(0);
    // State to manage whether the game has started
    const [gameStarted, setGameStarted] = useState(false);
    // State to manage whether the game is paused
    const [gamePaused, setGamePaused] = useState(false);

    // Start the game, resetting the score and marking it as started and not paused
    const startGame = () => {
        console.log("Starting the game...");
        setScore(0);
        setGameStarted(true);
        setGamePaused(false);
    };

    // Pause the game by toggling the pause state
    const pauseGame = () => {
        console.log("Toggling pause...");
        setGamePaused(!gamePaused);
    };

    // Reset the game, setting all values back to their initial state
    const resetGame = () => {
        console.log("Resetting the game...");
        setScore(0);
        setGameStarted(false);
        setGamePaused(false);
    };

    return (
        <div>
            <ControlPanel onStart={startGame} onPause={pauseGame} onReset={resetGame} isPaused={gamePaused} />
            {gameStarted && !gamePaused && <h2>Score: {score}</h2>}
            {gameStarted && Array.from({ length: 9 }, (_, i) => (
                <MoleContainer key={i} score={score} setScore={setScore} gamePaused={gamePaused} />
            ))}
        </div>
    );
};

export default App;

