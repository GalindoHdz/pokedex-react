import axios from "axios";

const client = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export default class PokeApi {
  static async getPokemon(name) {
    let { data } = await client.get(`/pokemon/${name}`);
    return data;
  }

  static async getEvolutionChain() {

  }

  static async getSpecies() {
    
  }
}


// import PokeApi from './services/poke-api'

// const test = async  () => {
//     console.log(await PokeApi.getPokemon('pikachu'))
// } 

// test();
