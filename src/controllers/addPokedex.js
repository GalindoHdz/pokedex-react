import { axiosConfig } from '../utils/axios';

export const addPokedex = async (index, data, dispatch) => {
    while (index < 892) {
        let list = [];
        let i = index;
        index < 800 ? (index += 100) : (index += 90);

        for (i; i <= index && i <= 893; i++) {
            const basic = await axiosConfig.get(`/pokemon/${i}/`);
            const str = '' + i;
            const pad = '000';
            const number = pad.substring(0, pad.length - str.length) + str;

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
