import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  // const [selectedBotId, setSelectedBotID] = useState(null);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then(r => r.json())
    .then(setBots)
  }, [])

  function onAddClick(addBot) {
    const inBotArmy = botArmy.find(
      bot => bot.id === addBot.id);
    if (!inBotArmy) {
      setBotArmy([...botArmy, addBot]);
    }
  }

  function onRemoveClick(removeBot) {
    setBotArmy(botArmy => 
      botArmy.filter(bot => bot.id !== removeBot.id))
  }

  function onDelete(deleteBot) {
    const updatedBots = bots.filter(bot => bot.id !== deleteBot.id);
    setBots(updatedBots)
  }

  return (
    <div>
      <YourBotArmy bots={botArmy} onRemoveClick={onRemoveClick} />
      <BotCollection bots={bots} onAddClick={onAddClick} onDelete={onDelete} />
    </div>
  )
}

export default BotsPage;
