import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // Render the home page with a welcome message and a call to action
  return (
    <div className="container mt-4">
      <div className="p-5 mb-4 bg-primary text-white rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Classic Gaming History</h1>
          <p className="fs-4">
            Explore legendary PlayStation games that defined a generation
          </p>
          <p className="lead">
            Take a journey through some of the most iconic video games from the
            late 1990s. From epic RPGs to groundbreaking stealth adventures and
            colorful platformers, these games set new standards in storytelling,
            gameplay, and technology.
          </p>
          <Link className="btn btn-light btn-lg" to="/games">
            Explore Classic Games
          </Link>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card text-center h-100">
            <div className="card-body">
              <h3 className="card-title">Iconic Stories</h3>
              <p className="card-text">
                Experience the unforgettable narratives that changed video game
                storytelling forever.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center h-100">
            <div className="card-body">
              <h3 className="card-title">Revolutionary Gameplay</h3>
              <p className="card-text">
                Discover the innovative mechanics that influenced generations of
                games to follow.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center h-100">
            <div className="card-body">
              <h3 className="card-title">Nostalgic Memories</h3>
              <p className="card-text">
                Revisit the classics that defined gaming for millions of players
                around the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
