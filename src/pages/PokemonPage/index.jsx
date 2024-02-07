import { useEffect, useState } from "react";
import CardPokemon from "../../components/CardPokemon";
import axios from 'axios';

const PokemonPage = () => {
    const [referenciasPokemons, setReferenciasPokemons] = useState([]);
    const [listaPokemons, setListaPokemons] = useState([]);
    const pegar100ReferenciasPokemons = async () => {
        try {
        const resposta = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
        setReferenciasPokemons(resposta.data.results);
        } catch (error) {
        console.error("Erro ao buscar as referencias dos pokemons", error);
        }
    }
    //console.log(listaTemporaria);
    setListaPokemons(listaTemporaria);
};
    useEffect(() => {
        pegarListaDePokemons();
    }, [referenciasPokemons]);
    

    useEffect(() => {
        pegar100ReferenciasPokemons();
   }, []);

   const pegarListaDePokemons = () => {
    const listaTemporaria = [];
    for(const referencia of referenciasPokemons) {
      try {
        const resposta = await axios.get(refrencia.url);
        listaTemporaria.push(resposta.data);
      } catch (error) {
        console.error("Erro ao buscar o pokemon");
      };
    };
   };

    pegarListaDePokemons();
    console.log(referenciasPokemons);
    return <CardPokemon />;

export default PokemonPage;