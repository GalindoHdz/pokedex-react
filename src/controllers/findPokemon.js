export const findPokemon = (word, pokedex) => {
    const filtered = pokedex.filter(pokemon => {
        if(pokemon.name === word || String(pokemon.id) === word){
            return pokemon
        }
        return 0
    });

    console.log(filtered);

    return filtered;
}