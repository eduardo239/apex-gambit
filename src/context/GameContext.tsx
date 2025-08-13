import React, { useEffect, useState } from "react";
import type { THero } from "../types/Hero";
import type { TMap } from "../types/Map";
import type { TGame } from "../types/Game";

import Hero from "../models/Hero";
import Map_ from "../models/Map_";
import { Game } from "../models/Game";
import { TYPE_END, TYPE_START } from "../types/positions.ts";

const defaultValue = {
  hero: null,
  game: null,
  map: null,
  setHero: () => { },
  setGame: () => { },
  setMap: () => { },
  generateNewGame: () => { },
  throwDice: () => { },

  actualPosition: 0,
  dice: 0,
}

// eslint-disable-next-line react-refresh/only-export-components
export const GameContext = React.createContext<{
  hero: Hero | null;
  game: TGame | null;
  map: TMap | null;
  setHero: React.Dispatch<React.SetStateAction<Hero | null>>;
  setGame: React.Dispatch<React.SetStateAction<TGame | null>>;
  setMap: React.Dispatch<React.SetStateAction<TMap | null>>;
  generateNewGame: () => void;
  throwDice: () => void;

  actualPosition: number;
  dice: number;
}>(defaultValue);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hero, setHero] = useState<THero | null>(null);
  const [map, setMap] = useState<TMap | null>(null);
  const [game, setGame] = useState<TGame | null>(null);

  const [actualPosition, setActualPosition] = useState<number>(0);
  const [dice, setDice] = useState<number>(0);

  const resetGame = () => {
    setHero(null);
    setMap(null);
    setGame(null);
    setActualPosition(0);
    setDice(0);
  }

  const generateNewGame = () => {
    resetGame();
    console.log(map, game);

    const newHero = new Hero("hero_name");
    const newMap = new Map_("first_map");
    const newGame = new Game("game_name", newHero, newMap);

    setHero(newHero);
    setMap(newMap);
    setGame(newGame);
  }

  const throwDice = () => {
    if (map && actualPosition === map.positions.length) {
      console.warn("You are at the end of the map, cannot throw dice.");
      return;
    }
    if (map) {
      const diceResult = map.throwDice();
      setDice(diceResult);
      const newPosition = actualPosition + diceResult;
      // Ensure the new position does not exceed the map's length
      if (newPosition < map.positions.length) {
        setActualPosition(newPosition);
      } else {
        setActualPosition(map.positions.length - 1); // Set to last position if exceeded
      }
    }
  }

  const validatePosition = (position: string) => {
    switch (position) {
      case TYPE_START:
        console.log("You are at the start position.");
        break;
      case TYPE_END:
        console.log("You have reached the end position.");
        break;
      default:
        console.log(`You are at position: ${position}`);
        break;
    }
  }

  useEffect(() => {
    console.log(actualPosition, map);
    if (map) {
      const typePosition = map?.positions[actualPosition];
      validatePosition(typePosition);
    }


  }, [actualPosition, map]);



  return (
    <GameContext.Provider value={{
      hero, game, map, setHero, setGame, setMap, generateNewGame, throwDice, actualPosition, dice

    }}>
      {children}
    </GameContext.Provider>
  );
};
