export const BATTING_STYLES = {
    AGGRESSIVE: {
        name: "Aggressive",
        // Higher risk (0.40 wicket), higher reward (0.15 for 6 runs)
        probabilities: { wicket: 0.40, 0: 0.10, 1: 0.10, 2: 0.10, 3: 0.05, 4: 0.10, 6: 0.15 }
    },
    DEFENSIVE: {
        name: "Defensive",
        // Lower risk (0.10 wicket), lower boundary probability
        probabilities: { wicket: 0.10, 0: 0.30, 1: 0.30, 2: 0.15, 3: 0.05, 4: 0.05, 6: 0.05 }
    }
};