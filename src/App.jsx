import React from 'react';
import Scoreboard from './components/Scoreboard';
import GameCanvas from './components/GameCanvas';
import PowerBar from './components/PowerBar';
import Controls from './components/Controls';
import './App.css';

function App() {
  return (
      <div className="game-container">
        <h1>2D Cricket Championship</h1>
        <Scoreboard />
        <GameCanvas />
        <PowerBar />
        <Controls />
      </div>
  );
}

export default App;