import { useState } from 'react';
import { COMMENTARY_DATABASE } from '../constants/commentary';

export const useGameLogic = () => {
    const [stats, setStats] = useState({
        runs: 0,
        wickets: 0,
        ballsPlayed: 0,
        isGameOver: false,
        lastOutcome: null,
        commentary: "Welcome to the Championship! Choose a style and play."
    });

    const totalOvers = 2;
    const maxBalls = totalOvers * 6; // 12 balls
    const maxWickets = 2;

    const updateGame = (outcome) => {
        setStats((prev) => {
            if (prev.isGameOver) return prev;

            const isWicket = outcome === 'wicket';
            const newWickets = isWicket ? prev.wickets + 1 : prev.wickets;
            const runValue = isWicket ? 0 : Number(outcome);
            const newRuns = prev.runs + runValue;
            const newBalls = prev.ballsPlayed + 1;

            const gameOver = newWickets >= maxWickets || newBalls >= maxBalls;

            // Bonus: Select random commentary based on outcome
            const messages = COMMENTARY_DATABASE[outcome];
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];

            return {
                runs: newRuns,
                wickets: newWickets,
                ballsPlayed: newBalls,
                isGameOver: gameOver,
                lastOutcome: outcome,
                commentary: randomMsg
            };
        });
    };

    const restartGame = () => {
        setStats({
            runs: 0,
            wickets: 0,
            ballsPlayed: 0,
            isGameOver: false,
            lastOutcome: null,
            commentary: "New Game Started! Good luck."
        });
    };

    return { stats, updateGame, restartGame, maxBalls, maxWickets };
};