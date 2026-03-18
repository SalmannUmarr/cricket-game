# 2D Cricket Championship - React Web App

## Project Overview
This is a **2D Cricket Batting Game** developed as part of the **CS-4032: Web Programming** course. The application features a probability-based power bar system, dynamic 2D animations, and a real-time scoreboard.

The game simulates a short-format match (2 Overs / 12 Balls) where the player must manage risks and rewards by choosing between **Aggressive** and **Defensive** batting styles.

## Student Information
* **Name:** Salman Umar
* **Roll No:** 22I-0908
* **Course:** CS-4032: Web Programming

---

## Features

### 1. Probability-Based Power Bar
Unlike traditional RNG-based games, the outcome of every shot is determined by a **moving slider**.
* The Power Bar is divided into segments proportional to the probabilities of different outcomes (0, 1, 2, 3, 4, 6, and Wicket).
* **Aggressive Style:** Higher boundary probability but significantly higher wicket risk ($40\%$).
* **Defensive Style:** Minimal wicket risk ($10\%$) with a focus on singles and dot balls.



### 2. 2D Animations & UI
* **Bowling Animation:** A red cricket ball visibly travels from the bowler's end to the batsman's end upon clicking "Play Shot."
* **Batting Animation:** The bat performs a "swing" animation synchronized with the ball reaching the crease.
* **Horizontal Pitch:** A realistic top-down horizontal view of a cricket pitch.
* **Dynamic Scoreboard:** Real-time tracking of Total Runs, Wickets (Max 2), and Overs (Max 2.0).

### 3. Bonus Commentary System
* A context-aware commentary box that generates unique, random messages based on the shot outcome (e.g., "Smashed! That's out of the park!" for a 6).

---

## Technical Stack
* **Framework:** React 18
* **Build Tool:** Vite
* **Styling:** CSS3 (Flexbox, Keyframe Animations)
* **State Management:** Custom React Hooks (`useGameLogic`)
* **IDE:** WebStorm

---

## Project Structure
```text
src/
├── components/
│   ├── Commentary.jsx    # Bonus Commentary display
│   ├── Controls.jsx      # Batting style & Reset buttons
│   ├── GameCanvas.jsx    # 2D Pitch & Animation logic
│   ├── PowerBar.jsx      # Proportional segments & Slider
│   └── Scoreboard.jsx    # Real-time stats display
├── constants/
│   ├── commentary.js     # Commentary message database
│   └── probabilities.js  # Batting style distributions
├── hooks/
│   └── useGameLogic.js   # Main game state engine
├── App.jsx               # Main application entry
└── App.css               # Global styles & animations
```

---

## How to Run the Project

1.  **Clone the Repository:**
    ```bash
    git clone <your-repo-link>
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Start Development Server:**
    ```bash
    npm run dev
    ```
4.  **Open in Browser:** Navigate to the URL provided in the terminal (usually `http://localhost:5173`).

---

## Development Progress (GitHub Commits)
The project was developed in modular phases to ensure clean code and trackable progress:
* **Phase 1:** Project initialization and modular directory setup.
* **Phase 2:** Implementation of game logic hook and probability constants.
* **Phase 3:** Development of the visual Power Bar and slider mapping.
* **Phase 4:** 2D Pitch design and animation synchronization.
* **Phase 5:** Integration of bonus commentary and final UI polish.

