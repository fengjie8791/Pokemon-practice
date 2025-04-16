import React from 'react';
import Card from './components/Card';
import Button from './components/Button';
import { useState, useEffect } from 'react';
const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [flipStates, setFlipStates] = useState(Array(6).fill(false));
  const [isShowAll, setIsShowAll] = useState(true);
  const [isHidden, setIshidden] = useState(false);
  const [selected, setSelected] = useState('official-artwork');
  const options = ['dream_world', 'home', 'official-artwork', 'showdown'];
  const handleCardFlip = (index) => {
    setFlipStates((prev) => {
      const newFlips = [...prev];
      newFlips[index] = !newFlips[index];
      return newFlips;
    });
  };
  const handleChange = (e) => {
    setSelected(e.target.value);
    console.log('choice', e.target.value);
  };
  const handleRerollPokemon = () => {
    setIshidden(true);
    fetchPokemons();
    setTimeout(() => {
      setIshidden(false);
    }, 1000);
  };

  const handleShowAll = () => {
    isShowAll
      ? setFlipStates(Array(6).fill(true))
      : setFlipStates(Array(6).fill(false));
    setIsShowAll(!isShowAll);
  };

  const fetchPokemons = async () => {
    const pokemonList = [];
    for (let i = 1; i <= 6; i++) {
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${
            Math.floor(Math.random() * 151) + 1
          }`
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
      <header className='header-container'>
        <h1 className='h1-text'>Create Your Pokemon Team, Randomly</h1>
      </header>
      <div className='cards-container'>
        {pokemon.map((poke, index) => (
          <Card
            isHidden={isHidden}
            key={index}
            id={poke.id}
            name={poke.name}
            img={poke.sprites.other[selected].front_default}
            isFlipped={flipStates[index]}
            onFlip={() => handleCardFlip(index)}
            types={poke.types}
          />
        ))}
      </div>

      <div className='dropdown-menu'>
        <label htmlFor='image-source'>Choose the Image Art Work </label>
        <select id='image-source' value={selected} onChange={handleChange}>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div className='btn-container'>
        <Button handleOnClick={handleRerollPokemon} name={'Roll Again'} />
        <Button
          handleOnClick={handleShowAll}
          name={isShowAll ? 'Show All' : 'Hide All'}
        />
      </div>
    </div>
  );
};

export default App;
