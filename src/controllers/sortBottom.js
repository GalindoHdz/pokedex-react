export const sortBottom = (pokedex) => {
    const sorted = pokedex.sort((a, b) => {
        if(a.id > b.id){
            return 1
        }

        return -1
    });

    console.log(sorted);
}