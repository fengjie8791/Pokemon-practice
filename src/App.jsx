import React from 'react';
import Card from './components/Card';
import Button from './components/Button';
import { useState, useEffect } from 'react';
const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [flipStates, setFlipStates] = useState(Array(6).fill(false));
  const handleCardFlip = (index) => {
    setFlipStates((prev) => {
      const newFlips = [...prev];
      newFlips[index] = !newFlips[index];
      return newFlips;
    });
  };

  const handleClearPokemon = () => {
    fetchPokemons();
  };

  const handleShowAll = () => {
    setFlipStates(Array(6).fill(true));
  };

  const fetchPokemons = async () => {
    const pokemonList = [];
    for (let i = 1; i <= 6; i++) {
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${Math.floor(
            Math.random() * 1000
          )}`
        );
        if (!res.ok) {
          throw new Error(`HTTP error status: ${res.status}`);
        }
        const data = await res.json();
        pokemonList.push(data);
      } catch (err) {
        console.error('Fetch error', err);
      }
    }
    setPokemon(pokemonList);
    setFlipStates(Array(6).fill(false));
    console.log(pokemon);
  };
  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <div className='cards-container'>
        {pokemon.map((poke, index) => (
          <Card
            key={index}
            id={poke.id}
            name={poke.name}
            img={poke.sprites}
            isFlipped={flipStates[index]}
            onFlip={() => handleCardFlip(index)}
          />
        ))}
      </div>
      .
      <div className='btn-container'>
        <Button handleOnClick={handleClearPokemon} name={'Roll Again'} />
        <Button handleOnClick={handleShowAll} name={'Show All'} />
      </div>
    </div>
  );
};

export default App;
