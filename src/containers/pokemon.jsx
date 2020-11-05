import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLikes } from '../controllers/addLike';

export const Pokemon = (props) => {
    const list = useSelector((state) => state.Likes.list);
    const dispatch = useDispatch();
    const pokedex = useSelector((state) => state.Pokedex.list);
    const pokemon = pokedex.find((element) => element.name === props.name);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.image}`;                   
    const [state, setState] = useState({
        like: pokemon.like
    });

    const addLike = () => {
        addLikes(pokemon.id, list, pokedex, dispatch);
        setState({
            like: !state.like
        });
    };

    return <div>
        {state.like ? (
            <button onClick={addLike}>removeLike</button>
        ) : (
            <button onClick={addLike}>addLike</button>
        )}
        <p>name: {pokemon.name}</p>
        <p>number: {pokemon.number}</p>
        <img src={image} alt='pokemon' />
        <p>description: {pokemon.description}</p>
        <p>height: {pokemon.height}</p>
        <p>weight: {pokemon.weight}</p>
    </div>
}