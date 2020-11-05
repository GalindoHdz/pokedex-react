import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { findPokemon } from '../controllers/findPokemon';

export const Search = () => {
    const pokedex = useSelector((state) => state.Pokedex.list);
    const [state, setState] = useState({
        word: ''
    });
    const find = () => {
        findPokemon(state.word, pokedex);
    }

    const handledChange = ({target}) => {
        setState({
            ...state,
            word: target.value
        });
    }

    return (
        <>
            <label>Name or number</label>
                <input type='text' name='pokemon' onChange={handledChange} />
            <button onClick={find} >search</button>
        </>
    );
}