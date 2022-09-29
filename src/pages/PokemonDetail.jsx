import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import letterColors from "../letterColors.json"
import typeColors from "../typeColors.json"
const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPokemon(res.data))
      .catch((error) => console.log(error.response));
  }, [id]);

  return (
    <div>
      <div className="pokeball-header">
        <div className="bg-red">
          <img
            src="https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png"
            alt=""
          />
        </div>
        <div className="bg-black">
          <div className="pokeball-button">
            <div></div>
          </div>
        </div>
        <button className="btn-back"><Link to={-1}><i class="fa-solid fa-arrow-left"></i></Link></button>
      </div>
      
      <div
        className="container-detail__pokemon"
        style={{ color: `${letterColors[pokemon.types?.[0].type.name]}` }}
      >
        <div
          className="container-detail__img"
          style={{ background: `${typeColors[pokemon.types?.[0].type.name]}` }}
        >
          <img
            src={pokemon.sprites?.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
        </div>
        <h3 className="id-pokemon">#{pokemon.id}</h3>
        <div className="container-detail__info">
          <div className="container-name">
            <div></div>
            <h3 className="name-pokemon">{pokemon.name}</h3>
          </div>
          <div className="container-height">
            <div>
              <p>height</p>
              <h4>{pokemon.height}</h4>
            </div>
            <div>
              <p>weight</p>
              <h4>{pokemon.weight}</h4>
            </div>
          </div>
          <div className="container-detailTypes">
            <div className="container-detailTypes__type">
              <h4>Type</h4>
              <div>
                {" "}
                {pokemon.types?.map((type) => (
                  <span
                    style={{ background: `${typeColors[type.type.name]}` }}
                    key={type.type.name}
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="container-detailTypes__abilities">
              <h4>abilities</h4>
              <div>
                {pokemon.abilities?.map((ability) => (
                  <span key={ability.ability.name}>{ability.ability.name}</span>
                ))}
              </div>
            </div>
          </div>
          <h2>Stats</h2>
          {pokemon.stats?.map((stat) => (
            <div key={stat.stat.name} className="container-stats">
              <div className="progress-stat">
                <p>{stat.stat.name}</p>
                <p>{stat.base_stat}/100</p>
              </div>
              <div className="progress-bar">
                <p style={{ width: `${stat.base_stat}%` }}>...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-detail__pokemon">
        <h2>Movements</h2>
        <div className="container-moves">
          {pokemon.moves?.map((move) => (
            <span key={move.move.name} className="move">
              {move.move.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
