import { useState } from "react";

export default function ({ name, symbol }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleEditClick = () => {
    setIsEdit((editClick)=> !editClick);
  };

  return (
    <li>
      <span className="player">
        {!isEdit ? (
          <span className="player-name">{name}</span>
        ) : (
          <input className="player-name" type="text" value={name} readOnly />
        )}

        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEdit ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
