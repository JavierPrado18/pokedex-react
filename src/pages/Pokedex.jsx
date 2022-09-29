import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link} from "react-router-dom";
import PokemonItem from "../components/PokemonItem";
import SearchPokemon from "../components/SearchPokemon";

const Pokedex = () => {
  const user = useSelector((state) => state.user);
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
      .then((res) => setPokemons(res.data.results));

    axios
      .get(" https://pokeapi.co/api/v2/type/")
      .then((res) => setTypes(res.data.results));
  }, []);

  

  const filterType = (e) => {
    if(e.target.value==""){
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
            .then((res) => setPokemons(res.data.results));
    }else{
        axios.get(e.target.value)
            .then((res) => setPokemons(res.data.pokemon));
    }
  };

  //paginations
  const cards = 20;
  const [page, setPage] = useState(1);
  const lastIndex = page * cards;
  const firstIndex = lastIndex - cards;
  const pokemonsPaginated = pokemons
    ? pokemons.slice(firstIndex, lastIndex)
    : pokemons.slice(firstIndex, lastIndex);
  const lastPage = Math.ceil(pokemons.length / cards);
  const [pages,setPages]=useState(0)

  //pages numbers
  const numbers = [];
  
  for (let i = 1; i <= lastPage; i++) {
    numbers.push(i);
  }
  
  const cantidad=numbers.length/5;

  return (
    <div>
      
      <div className="pokeball-header" id="header">
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
          <p style={{ fontSize: "x-large",margin:"30px 8%" }}>
            <span style={{ color: "red" }}>
              <b> Welcome {user}, </b>
            </span>
            here you can find your favorite pokemon
          </p>
      </div>
      <button className="btn-back"><Link to="/"><i class="fa-solid fa-arrow-left"></i></Link></button>
      <div className="container-filters">
        
        <SearchPokemon/>
        
        <select onChange={filterType} className="container-types">
          <option value="">All pokemons</option>
          {types.map((type) => (
            <option value={type.url} key={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </div>

      <div className="container-pokemons">
        {pokemonsPaginated.map((pokemon) => (
          <PokemonItem
            url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            key={pokemon.name ? pokemon.name : pokemon.pokemon.name}
          />
        ))}
      </div>
      <div className="container-pagination" >
        <button onClick={() => {
          setPages(pages - 1)
          setPage(page-5)
          }} disabled={pages === 0}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div style={{width:"256px",overflow:"hidden" }}>
        <div className="container-pages" style={{marginLeft:`${pages*-100+"%"}`}}>
        {numbers.map((number) =>{
            let background="white"
            let color="black";
            if (lastIndex/number ==cards ){
                background="#DD1A1A"
                color="white"
            }
            if (number<10){
                number="0"+number
            } 
            return (

          <button key={number} style={{backgroundColor:`${background}`,color:`${color}`}} onClick={() => setPage(number)}>
            {number}
          </button>
        )})}
        </div>
        </div>
        <button onClick={() =>{ 
          setPages(pages+ 1)
          setPage(((pages+1)*5)+1)
          }} disabled={pages >= cantidad-1}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
        
      </div>
    </div>
  );
};

export default Pokedex;
