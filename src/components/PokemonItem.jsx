import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import letterColors from "../letterColors.json"
import typeColors from "../typeColors.json"
const PokemonItem = ({url}) => {
    
    const [pokemon,setPokemon]=useState({})
  
    
  
    
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get(url)
            .then(res=>{
                setPokemon(res.data)
       
            })
    },[])
    
    return (
        <div  className='container-card' style={{background:`${typeColors[pokemon.types?.[0].type.name]}`}} onClick={()=>navigate(`/pokedex/${pokemon.id}`)}>
            <div className='container-card__img' style={{background:`${typeColors[pokemon.types?.[0].type.name]}`}}>           
                <img src={pokemon.sprites?.other["official-artwork"].front_default} alt={pokemon.name} />
            </div>
            <div style={{color:`${letterColors[pokemon.types?.[0].type.name]}`}} className="container-card__info">
                <h2  >{pokemon.name}</h2>
                {pokemon.types?.map(type=>(
                    <span key={type.type.url}> {type.type.name}</span>
                ))}
                <p>Type</p>
                <div className='container-card__stats'>
                    {pokemon.stats?.map(stat=>(
                        <div key={stat.stat.url}>
                            <p>{(stat.stat.name).toUpperCase()}</p>
                            <h3>{stat.base_stat}</h3>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default PokemonItem