import PokemonDisplay from "./components/PokemonDisplay";
import PokemonForm from "./components/PokemonForm";
import PokemonResult from "./components/PokemonResult";
import { useGameManager } from "./hooks/useGameManage";

const App = () => {
  const {
    loadNewPokemon,
    pokemon,
    error,
    isLoading,
    handlePokemonNameSubmit,
    gameStatus,
  } = useGameManager();
  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }
  return (
    <div className="container mx-uato my-5">
      <div className="row">
        <div className="col-12 col-md-8-col-lg-6">
          <PokemonDisplay
            pokemon={pokemon}
            isLoading={isLoading}
            gameStatus={gameStatus}
          />
          <PokemonForm
            handlePokemonNameSubmit={handlePokemonNameSubmit}
            gameStatus={gameStatus}
          />
          <PokemonResult
            loadNewPokemon={loadNewPokemon}
            gameStatus={gameStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
