export const filterPokedex = (pokedex, options) => {
    let filtered = pokedex
        .filter(pokemon => {
            return pokemon.types.every(type => options.includes(type))
        })

    console.log(filtered);

    return filtered
}