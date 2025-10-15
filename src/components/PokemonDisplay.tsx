import type { Pokemon } from "../types/pokemon.interface";
import Spinner from "./Spinner";
import { GameStatus } from "../hooks/useGameManage";

interface Props {
  pokemon: Pokemon | null;
  isLoading: boolean;
  gameStatus: GameStatus;
}

const PokemonDisplay = ({ pokemon, isLoading, gameStatus }: Props) => {
  const showAnswer = gameStatus !== GameStatus.Playing;
  const image = pokemon?.image;
  const namePokemon = pokemon?.name;
  return (
    <div className="card">
      <div className="card-header">
        <h1>
          {showAnswer ? namePokemon?.toUpperCase() : "¿how is that pokemon?"}
        </h1>
      </div>
      <div className="card-body">
        {isLoading ? (
          <Spinner />
        ) : (
          <img
            src={image}
            alt=""
            className="img-fluid mx-auto d-block"
            style={{
              maxHeight: "300px",
              filter: showAnswer ? "none" : "brigtness(0)",
              transition: "filter 0.3s ease-int-out",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default PokemonDisplay;
