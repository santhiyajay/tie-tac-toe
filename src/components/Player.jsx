import { useState } from "react";

export default function ({ name, symbol }) {
  const [isEdit, setIsEdit] = useState(false);
  const [playerName, setPlayerName] = useState("playername1");

  const handleEditClick = () => {
    setIsEdit((editClick)=> !editClick);
  };

  const handleChange = (event) =>{
    console.log(event, "event");
    setPlayerName(event.target.value);
    console.log(event.target.value, "event");
  }
 

  return (
    <li>
      <span className="player">
        {!isEdit ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input className="player-name" type="text" value={playerName} onChange={handleChange}/>
        )}

        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEdit ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
