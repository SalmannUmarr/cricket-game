import { useState } from 'react';

export const useGameLogic = () => {
    const [stats, setStats] = useState({
        runs: 0,
        wickets: 0,
        ballsPlayed: 0,
        isGameOver: false,
        lastOutcome: null
    });

    const totalOvers = 2;
    const maxBalls = totalOvers * 6; // 12 balls [cite: 51]
    const maxWickets = 2; // [cite: 52]

    const updateGame = (outcome) => {
        if (stats.isGameOver) return;

        setStats((prev) => {
            const newWickets = outcome === 'wicket' ? prev.wickets + 1 : prev.wickets;
            const newRuns = outcome === 'wicket' ? prev.runs : prev.runs + parseInt(outcome);
            const newBalls = prev.ballsPlayed + 1;

            const gameOver = newWickets >= maxWickets || newBalls >= maxBalls;

            return {
                runs: newRuns,
                wickets: newWickets,
                ballsPlayed: newBalls,
                isGameOver: gameOver,
                lastOutcome: outcome
            };
        });
    };

    const restartGame = () => {
        setStats({ runs: 0, wickets: 0, ballsPlayed: 0, isGameOver: false, lastOutcome: null });
    };

    return { stats, updateGame, restartGame, maxBalls, maxWickets };
};