export const filterPokedex = (pokedex, filters) => {
    // let filtered = pokedex
    //     .filter(pokemon => {
    //         return pokemon.types.some(type => filters.includes(type))
    //     })

    let filtered = pokedex;

    Object.values(filters).forEach(
        filter => {
            filtered = filtered.filter(
                pokemon => {
                    return pokemon.types.some(type => {
                        return filter.includes(type)
                    });
                }
            );

            console.log(filtered)
        }
    )    
    
    // console.log(pokedex);

    return filtered;
}