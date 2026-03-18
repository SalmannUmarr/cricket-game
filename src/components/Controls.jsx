import React from 'react';
import { BATTING_STYLES } from '../constants/probabilities';

const Controls = ({ currentStyle, setCurrentStyle, onRestart }) => {
    return (
        <div className="controls">
            <div style={{ marginBottom: '10px' }}>
                <button
                    onClick={() => setCurrentStyle(BATTING_STYLES.DEFENSIVE)}
                    style={{ backgroundColor: currentStyle.name === 'Defensive' ? '#4CAF50' : '#ccc' }}
                >
                    Defensive
                </button>
                <button
                    onClick={() => setCurrentStyle(BATTING_STYLES.AGGRESSIVE)}
                    style={{ backgroundColor: currentStyle.name === 'Aggressive' ? '#f44336' : '#ccc', marginLeft: '10px' }}
                >
                    Aggressive
                </button>
            </div>
            <button onClick={onRestart}>Restart Game</button>
        </div>
    );
};

export default Controls;