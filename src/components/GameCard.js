import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{game.title}</h5>
        <div className="mb-2">
          <span className="badge bg-primary me-2">{game.year}</span>
          <span className="badge bg-secondary me-2">{game.platform}</span>
        </div>
        <p className="card-text text-muted">
          <small>Developer: {game.developer}</small>
        </p>
        <p className="card-text">{game.description.substring(0, 100)}...</p>
      </div>
      <div className="card-footer bg-white border-top-0">
        <Link to={`/games/${game.id}`} className="btn btn-primary w-100">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
