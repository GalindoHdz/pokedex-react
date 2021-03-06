import axios from 'axios';

// API pokemon
const client = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export default class PokeApi {
  // Datos basicos del pokemon
  static async getPokemon(id) {
    const { data } = await client.get(`/pokemon/${id}`);
    return data;
  }

  // Descripcion del pokemon y url de la cadena de evolucion
  static async getSpecies(id) {
    let { data } = await client.get(`/pokemon-species/${id}`);
    return {
      url: data.evolution_chain?.url,
      description: data.flavor_text_entries[0].flavor_text,
    };
  }

  // Datos de la cadena de evolucion del pokemon
  static async getEvolutionChain(url) {
    let { data } = await client.get(url);
    return data.chain;
  }
}
