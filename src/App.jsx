import React from 'react';
import Card from './components/Card';
import Button from './components/Button';
import { useState, useEffect } from 'react';
const App = () => {
  const [pokemon, setPokemon] = useState([]);

  const handleGeneratePokemon = (id) => {
    // console.log(pokemon);
    if (pokemon.length >= 6) return;
    const fetchData = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      try {
        if (!res.ok) {
          throw new Error(`HTTP error status: ${res.status}`);
        }
        const data = await res.json();
        setPokemon((prev) => [...prev, data]);
      } catch (err) {
        console.error('Fetch error', err);
      }
    };
    fetchData();
  };

  const handleClearPokemon = () => {
    setPokemon([]);
  };

  return (
    <div>
      <div className='cards-container'>
        {pokemon.map((poke, index) => (
          <Card key={index} id={poke.id} name={poke.name} img={poke.sprites} />
        ))}
      </div>
      .
      <div className='btn-container'>
        <Button handleOnClick={handleGeneratePokemon} name={'Fetch'} />
        <Button handleOnClick={handleClearPokemon} name={'Clear'} />
      </div>
    </div>
  );
};

export default App;
