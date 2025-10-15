import { GameStatus } from "../hooks/useGameManage";

interface Props {
  loadNewPokemon: () => void;
  gameStatus: GameStatus;
}

const PokemonResult = ({ loadNewPokemon, gameStatus }: Props) => {
  if (gameStatus === GameStatus.Playing) {
    return null;
  }
  return (
    <div
      className={`alert alert-${
        gameStatus === "correct" ? "success" : "danger"
      } text-center`}
    >
      {gameStatus === "correct" ? (
        <h2>
          Correcto! <i className="bi-arrow-through-heart-fill"></i>
        </h2>
      ) : (
        <h2>
          Incorrecto! <i className="bi-bookmark-x"></i>
        </h2>
      )}
      <button className="btn btn-dark mt-3" onClick={loadNewPokemon}>
        {" "}
        Volver a jugar
      </button>
    </div>
  );
};

export default PokemonResult;
