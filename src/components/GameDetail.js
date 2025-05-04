import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const GameDetail = ({ games }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the game with the matching id (convert id to number)
  const game = games.find((game) => game.id === parseInt(id));

  if (!game) {
    return (
      <div className="container mt-4">
        <p>Game not found!</p>
        <button className="btn btn-primary" onClick={() => navigate("/games")}>
          Back to Games
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <h1>{game.title}</h1>
          <div className="mb-3">
            <span className="badge bg-primary me-2">{game.year}</span>
            <span className="badge bg-secondary me-2">{game.platform}</span>
            <span className="badge bg-info me-2">{game.genre}</span>
          </div>

          <h5>Developer: {game.developer}</h5>

          <div className="card mb-4 mt-4">
            <div className="card-body">
              <h5 className="card-title">Game Description</h5>
              <p className="card-text">{game.description}</p>
            </div>
          </div>

          <button
            className="btn btn-secondary"
            onClick={() => navigate("/games")}
          >
            Back to Games
          </button>
        </div>
        <div className="col-md-4">
          <img
            src={game.image}
            alt={game.title}
            className="img-fluid rounded mb-4"
          />

          <div className="card bg-light">
            <div className="card-body">
              <h5 className="card-title">Quick Facts</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-light">
                  <strong>Released:</strong> {game.year}
                </li>
                <li className="list-group-item bg-light">
                  <strong>Platform:</strong> {game.platform}
                </li>
                <li className="list-group-item bg-light">
                  <strong>Developer:</strong> {game.developer}
                </li>
                <li className="list-group-item bg-light">
                  <strong>Genre:</strong> {game.genre}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
