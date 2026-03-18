import React from 'react';

const Scoreboard = ({ stats }) => {
    const overs = Math.floor(stats.ballsPlayed / 6);
    const balls = stats.ballsPlayed % 6;

    return (
        <div className="scoreboard">
            <h2>Scoreboard</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <p>Runs: <strong>{stats.runs}</strong></p>
                <p>Wickets: <strong>{stats.wickets}</strong></p>
                <p>Overs: <strong>{overs}.{balls}</strong></p>
            </div>
            {stats.isGameOver && <h3 style={{ color: 'red' }}>GAME OVER</h3>}
        </div>
    );
};

export default Scoreboard;