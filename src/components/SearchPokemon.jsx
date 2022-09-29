import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchPokemon = () => {
    const navigate=useNavigate()
    const [pokemonSearch, setPokemonSearch] = useState("");
    const search = (e) => {
        e.preventDefault();
        navigate(`/pokedex/${pokemonSearch}`);
      };
    return (
        <form onSubmit={search} className="container-search">
          <input
            type="text"
            placeholder="Search pokemon"
            value={pokemonSearch}
            onChange={(e) => setPokemonSearch(e.target.value)}
          />
          <button>Search</button>
        </form>
    );
};

export default SearchPokemon;