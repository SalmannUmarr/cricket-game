import React, { useState, useEffect, useRef } from 'react';

const PowerBar = ({ currentStyle, onShotPlayed, isGameOver }) => {
    const [sliderPos, setSliderPos] = useState(0);
    const requestRef = useRef();

    // Color mapping for UI clarity
    const colors = { wicket: '#f44336', 0: '#9e9e9e', 1: '#4caf50', 2: '#ffeb3b', 3: '#ff9800', 4: '#fb8c00', 6: '#673ab7' };

    // Smoothly move the slider [cite: 45, 77]
    const animate = () => {
        setSliderPos((prev) => (prev >= 100 ? 0 : prev + 1.5)); // Adjust speed here
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        if (!isGameOver) {
            requestRef.current = requestAnimationFrame(animate);
        }
        return () => cancelAnimationFrame(requestRef.current);
    }, [isGameOver]);

    const handleShot = () => {
        if (isGameOver) return;

        // Use a local reference for the current position to avoid sync issues
        const currentPos = sliderPos / 100;
        let cumulative = 0;
        let finalOutcome = null;

        // Use the exact same entries used for rendering the segments [cite: 61, 62]
        const outcomeEntries = Object.entries(currentStyle.probabilities);

        for (const [outcome, prob] of outcomeEntries) {
            cumulative += prob;
            if (currentPos <= cumulative) {
                finalOutcome = outcome;
                break;
            }
        }

        if (finalOutcome !== null) {
            // Pass the string directly; let useGameLogic handle the math
            onShotPlayed(finalOutcome);
        }
    };

    return (
        <div className="power-bar-container">
            <div className="bar-visual" style={{ position: 'relative', height: '40px', display: 'flex', borderRadius: '4px', overflow: 'hidden' }}>
                {Object.entries(currentStyle.probabilities).map(([outcome, prob]) => (
                    <div
                        key={outcome}
                        style={{
                            width: `${prob * 100}%`,
                            backgroundColor: colors[outcome],
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '12px',
                            fontWeight: 'bold'
                        }}
                    >
                        {outcome === 'wicket' ? 'W' : outcome}
                    </div>
                ))}
                {/* The Slider [cite: 45, 76] */}
                <div style={{
                    position: 'absolute',
                    left: `${sliderPos}%`,
                    width: '4px',
                    height: '100%',
                    backgroundColor: 'white',
                    boxShadow: '0 0 5px black',
                    zIndex: 10
                }} />
            </div>
            <button
                onClick={handleShot}
                disabled={isGameOver}
                style={{ marginTop: '15px', padding: '10px 30px', fontSize: '1.2rem', cursor: 'pointer' }}
            >
                PLAY SHOT
            </button>
        </div>
    );
};

export default PowerBar;