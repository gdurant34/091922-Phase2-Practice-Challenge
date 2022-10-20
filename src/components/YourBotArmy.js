import React from "react";
import BotSpecs from "./BotSpecs";

function YourBotArmy({ bots, onRemoveClick }) {
  // console.log(bots)
  const armyBotSpecs = bots.map(bot => (
    <BotSpecs key={bot.id} bot={bot} onRemoveClick={onRemoveClick} />
  ))

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {armyBotSpecs}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
