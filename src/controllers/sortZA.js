export const sortZA = (pokedex) => {
    const sorted = pokedex.sort((a, b) => {
        if(a.name < b.name){
            return 1
        }

        return -1
    });

    console.log(sorted);
}