import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Games from "./components/Games";
import GameDetail from "./components/GameDetail";
import gamesData from "./data/games.json";

function App() {
  // Game data
  const [games] = useState(gamesData);

  // Render the main application with routing
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games games={games} />} />
          <Route path="/games/:id" element={<GameDetail games={games} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
