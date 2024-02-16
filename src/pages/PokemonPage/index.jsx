import { useEffect, useState } from "react";
import CardPokemon from "../../components/CardPokemon";
import Loading from "../../components/Loading";
import axios from "axios";
import "./styles.css";

const PokemonPage = () => {
    const [referenciasPokemons, setReferenciasPokemons] = useState([]);
    const [listaPokemons, setListaPokemons] = useState([]);
    const [showLoading, setShowLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");   

    
    const pegar100ReferenciasPokemons = async () => {
              try {
        const resposta = await axios.get(
            "https://pokeapi.co/api/v2/pokemon?limit=100"
            );
        setReferenciasPokemons(resposta.data.results);
        } catch (error) {
        console.error("Erro ao buscar as referencias dos pokemons", error);
        }
      };
        

    useEffect(() => {
        pegar100ReferenciasPokemons();
   }, []);

   const pegarListaDePokemons = async () => {
    setShowLoading(true);
    const listaTemporaria = [];
     
    for (const referencia of referenciasPokemons) {
      try {
        const resposta = await axios.get(referencia.url);
        listaTemporaria.push(resposta.data);
      } catch (error) {
        console.error("Erro ao buscar o pokemon", error);
      }
    }
    setListaPokemons(listaTemporaria);
    setShowLoading(false);
   };

    useEffect(() => {
        pegarListaDePokemons();
    }, [referenciasPokemons]);

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    }

    const filteredPokemons = listaPokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
    <div className="pokemon-container">
        <input
          type="text"
          placeholder="Pesquisar Pokémon..."
          value={searchTerm}
          onChange={handleSearchChange}
        />

        {filteredPokemons.map((pokemon) => (
            <CardPokemon 
            name={pokemon.name} 
            foto={pokemon.sprites.front_default}
            id={pokemon.id}
            url={pokemon.forms[0].url}
        />
       ))}
       
        { showLoading && <Loading />}
     </div>
    
    );
  };

export default PokemonPage;