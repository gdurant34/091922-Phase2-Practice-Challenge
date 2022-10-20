import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onAddClick, onDelete }) {
  // console.log(bots)
  const botCards = bots.map(bot => (
    <BotCard key={bot.id} bot={bot} onAddClick={onAddClick} onDelete={onDelete} />
  ))

  return (
    <div className="ui four column grid">
      <div className="row">
        {botCards}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
