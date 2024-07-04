import { useState } from "react";
export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {!isEditing && editablePlayerName}
          {isEditing && (
            <input
              type="text"
              onChange={handleChange}
              value={playerName}
              required
            />
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={() => handleEditClick()}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </li>

      {/* <li>
                {!isEditing && (<span className="player">
              <span className="player-name">{name}</span>
              <span className="player-symbol">{symbol}</span>
            </span>)}
            {isEditing && (<input type="text" placeholder="Test Editng"/>)}
            <button onClick={() => handleEditClick()}>Edit</button>
          </li> */}
    </>
  );
}
