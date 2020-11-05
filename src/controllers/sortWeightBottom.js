export const sortWeightBottom = (pokedex) => {
    const sorted = pokedex.sort((a, b) => {
        if(a.weight > b.weight){
            return 1
        }

        return -1
    });

    console.log(sorted);
}