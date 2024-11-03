import React, { useEffect, useState } from "react";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log(result);
        setPokemon(result.results); // The API returns an array of Pokémon in `results`
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleClick = (pokeName) => {
    alert(pokeName);
  };

  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {pokemon.map((poke, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              backgroundColor: "blue",
              borderRadius: "20px",
              gap: 16,
              marginBottom: 8,
              color: "white",
            }}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
              alt={poke.name}
            />
            <h2>{poke.name}</h2>
            <button onClick={() => handleClick(poke.name)}>Details</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
