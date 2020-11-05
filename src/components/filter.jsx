import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Option } from './option';
import { filterPokedex } from '../controllers/filterPokedex'

export const Filter = () => {
    const pokedex = useSelector((state) => state.Pokedex.list);
    const [state, setState] = useState({
        bug: false,
        dark: false,
        dragon: false,
        electric: false,
        fairy: false,
        fighting: false,
        fire: false,
        flying: false,
        gost: false,
        grass: false,
        ground: false,
        ice: false,
        normal: false,
        poision: false,
        psychic: false,
        rock: false,
        steel: false,
        water: false
    });

    const handleToggle = ({target}) => {
        setState(state => ({
            ...state,
            [target.name]: !state[target.name],
        }));
    };

    const search = () => {
        filterPokedex(pokedex, ['bug', 'fire']);
    }

    return (
        <div>
            <form id='filter'>
                {Object.keys(state).map(key => (
                    <Option key={key} option={key} handledChange={handleToggle} />
                ))}
            </form>
            <button onClick={search}>Search</button>
        </div>
    );
};