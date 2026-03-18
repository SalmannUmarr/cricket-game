import React, { useState } from 'react';
import Scoreboard from './components/Scoreboard';
import GameCanvas from './components/GameCanvas';
import PowerBar from './components/PowerBar';
import Controls from './components/Controls';
import { useGameLogic } from './hooks/useGameLogic';
import { BATTING_STYLES } from './constants/probabilities';
import './App.css';

function App() {
    const { stats, updateGame, restartGame } = useGameLogic();
    const [currentStyle, setCurrentStyle] = useState(BATTING_STYLES.DEFENSIVE);

    return (
        <div className="game-container">
            <h1>2D Cricket Championship</h1>

            {/* Pass stats to Scoreboard */}
            <Scoreboard stats={stats} />

            <GameCanvas />

            {/* PowerBar will eventually need currentStyle and updateGame */}
            <PowerBar
                currentStyle={currentStyle}
                onShotPlayed={updateGame}
                isGameOver={stats.isGameOver}
            />

            {/* Controls to switch styles and restart */}
            <Controls
                currentStyle={currentStyle}
                setCurrentStyle={setCurrentStyle}
                onRestart={restartGame}
            />
        </div>
    );
}

export default App;