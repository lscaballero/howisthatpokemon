import { useCallback, useEffect, useState } from "react";
import type { Pokemon } from "../types/pokemon.interface";
import {
  getRamdomPokemon,
  isPokemonCorrect,
} from "../services/pokemon.service";

export enum GameStatus {
  Playing = "playing",
  Won = "correct",
  Lost = "wrong",
}

export const useGameManager = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing);

  const handlePokemonNameSubmit = useCallback(
    (userInput: string) => {
      if (!pokemon) return;

      const isValid = isPokemonCorrect(pokemon.name, userInput);

      setGameStatus(isValid ? GameStatus.Won : GameStatus.Lost);
    },
    [pokemon]
  );

  const loadNewPokemon = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setGameStatus(GameStatus.Playing);
    try {
      const randomPokemon = await getRamdomPokemon();
      setPokemon(randomPokemon);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNewPokemon();
  }, [loadNewPokemon]);

  return {
    pokemon,
    isLoading,
    error,
    loadNewPokemon,
    handlePokemonNameSubmit,
    gameStatus,
  };
};
