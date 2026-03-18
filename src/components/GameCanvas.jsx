import React from 'react';

const GameCanvas = ({ stats, isBowling }) => {
    return (
        <div className="canvas-area">
            <div className="pitch">
                {/* Bowler End Stumps */}
                <div className="stumps stumps-bowler"></div>

                {/* The Ball: Uses a key based on ballsPlayed to reset animation every time */}
                {isBowling && (
                    <div
                        key={stats.ballsPlayed}
                        className="ball ball-bowled"
                    ></div>
                )}

                <div className="batsman-zone">
                    {/* Bat swings only when bowling ends and there was a result */}
                    <div className={`bat ${!isBowling && stats.lastOutcome ? 'bat-swing' : ''}`}></div>
                    <div className="stumps stumps-batsman"></div>
                </div>
            </div>
        </div>
    );
};

export default GameCanvas;