import { useState } from 'react';

export const useGameLogic = () => {
    const [stats, setStats] = useState({
        runs: 0,
        wickets: 0,
        ballsPlayed: 0,
        isGameOver: false,
        lastOutcome: null
    });

    const totalOvers = 2; // [cite: 51, 83]
    const maxBalls = totalOvers * 6; // 12 balls [cite: 51, 83]
    const maxWickets = 2; // [cite: 52, 84]

    const updateGame = (outcome) => {
        setStats((prev) => {
            if (prev.isGameOver) return prev;

            const isWicket = outcome === 'wicket';
            const newWickets = isWicket ? prev.wickets + 1 : prev.wickets;
            const runValue = isWicket ? 0 : Number(outcome);
            const newRuns = prev.runs + runValue;
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