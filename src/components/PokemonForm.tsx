import React, { useState } from "react";
import { GameStatus } from "../hooks/useGameManage";

interface Props {
  handlePokemonNameSubmit: (userInput: string) => void;
  gameStatus: GameStatus;
}

const PokemonForm = ({ handlePokemonNameSubmit, gameStatus }: Props) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) {
      return;
    }
    handlePokemonNameSubmit(value.trim().toLocaleLowerCase());
    setValue("");
  };
  return (
    <form className="input-group my-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="How is that pokemon"
        aria-label="How is that pokemon"
        aria-describedby=""
        onChange={(e) => setValue(e.target.value)}
        autoFocus
        disabled={gameStatus !== GameStatus.Playing}
      />
      <button
        className="btn btn-outline-secondary"
        type="submit"
        disabled={!value.trim() || gameStatus !== GameStatus.Playing}
      >
        Play
      </button>
    </form>
  );
};

export default PokemonForm;
