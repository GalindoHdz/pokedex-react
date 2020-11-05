export const sortHeightBottom = (pokedex) => {
    const sorted = pokedex.sort((a, b) => {
        if(a.height > b.height){
            return 1
        }

        return -1
    });

    console.log(sorted);
}