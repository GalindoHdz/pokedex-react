import { axiosConfig } from '../utils/axios';

export const addPokedex = async (index, data, dispatch) => {
    while (index < 892) {
        let list = [];
        let i = index;
        index < 800 ? (index += 100) : (index += 85);

        console.log(index);

        for (i; i <= index && i <= 893; i++) {
            const basic = await axiosConfig.get(`/pokemon/${i}/`);
            const str = '' + i;
            const pad = '000';
            const number = pad.substring(0, pad.length - str.length) + str;
            let chain = await axiosConfig.get(`/pokemon-species/${i}/`);
            chain = chain.data.evolution_chain.url
            chain = await axiosConfig.get(chain);
            chain = chain.data.chain;
            chain = extract(chain);
            let description = await axiosConfig.get(`/pokemon-species/${i}/`);
            description = description.data.flavor_text_entries
            description = description[0].flavor_text;

            const pokemon = {
                number: number,
                image: `${number}.png`,
                id: basic.data.id,
                name: basic.data.name,
                height: basic.data.height,
                weight: basic.data.weight,
                types: basic.data.types.map((type) => type.type.name),
                stats: basic.data.stats.map((stat) => ({
                    name: stat.stat.name,
                    value: stat.base_stat,
                })),
                like: false,
                chainEvolution: chain,
                description
            };

            list.push(pokemon);
        }

        data = data.concat(list);
        index++;

        const value = {
            index: index,
            list: data,
        };

        dispatch({
            type: 'ADD_POKEDEX',
            payload: { value },
        });
    }
};

const extract = (chain) => {
    let evoChain = [];

    evoChain.push({
        "name": chain.species.name
    });

    if(chain.evolves_to){
        Object.entries(chain.evolves_to)
        .map(element => evoChain.push({
            "evolution": extract(element[1])
        }));
    }
    
    return evoChain;
}