"use client";
import PokemonList from "./pokemon-list";

export const Pokedex = () => {
  return (
    <div>
      <header className="App-header">
        <p>Welcome to the Pokedex!</p>
      </header>
      <div>
        <PokemonList />
      </div>
    </div>
  );
};
