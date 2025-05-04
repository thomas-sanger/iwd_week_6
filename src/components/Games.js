import React from "react";
import GameCard from "./GameCard";

const Games = ({ games }) => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Classic Video Games</h2>
      <div className="row">
        {games.map((game) => (
          <div className="col-md-6 mb-4" key={game.id}>
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
