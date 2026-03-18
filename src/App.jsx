import React, { useState } from 'react';
import Scoreboard from './components/Scoreboard';
import GameCanvas from './components/GameCanvas';
import PowerBar from './components/PowerBar';
import Controls from './components/Controls';
import Commentary from './components/Commentary';
import { useGameLogic } from './hooks/useGameLogic';
import { BATTING_STYLES } from './constants/probabilities';
import './App.css';

function App() {
    const { stats, updateGame, restartGame } = useGameLogic();
    const [currentStyle, setCurrentStyle] = useState(BATTING_STYLES.DEFENSIVE);
    const [isBowling, setIsBowling] = useState(false);

    const handleShotAttempt = (outcome) => {
        if (stats.isGameOver || isBowling) return;

        // Start bowling animation
        setIsBowling(true);

        // Synchronize score update with ball reaching the batsman (1s)
        setTimeout(() => {
            updateGame(outcome);
            setIsBowling(false);
        }, 1000);
    };

    return (
        <div className="game-container">
            <h1>2D Cricket Championship</h1>

            <Scoreboard stats={stats} />

            <GameCanvas
                stats={stats}
                isBowling={isBowling}
            />

            <Commentary message={stats.commentary} />

            <PowerBar
                currentStyle={currentStyle}
                onShotPlayed={handleShotAttempt}
                isGameOver={stats.isGameOver || isBowling}
            />

            <Controls
                currentStyle={currentStyle}
                setCurrentStyle={setCurrentStyle}
                onRestart={restartGame}
            />
        </div>
    );
}

export default App;