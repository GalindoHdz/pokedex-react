import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLikes } from '../controllers/addLike';
import { NavLink } from 'react-router-dom'

export const Card = (props) => {
    const list = useSelector((state) => state.Likes.list);
    const pokedex = useSelector((state) => state.Pokedex.list);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        id: pokedex[props.index].id,
        name: pokedex[props.index].name,
        number: pokedex[props.index].number,
        image: pokedex[props.index].image,
        types: pokedex[props.index].types,
        like: pokedex[props.index].like,
    });
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${state.image}`;

    const addLike = () => {
        addLikes(state.id, list, pokedex, dispatch);
        setState({
            ...state,
            like: !state.like,
        });
    };

    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white mx-2 my-2'>
            {state.like ? (
                <button onClick={addLike}>removeLike</button>
            ) : (
                <button onClick={addLike}>addLike</button>
            )}
            <NavLink exact
            to={`/Pokemon/${state.name}`}
            style={{ textDecoration: 'none' }}>
                <img src={image} alt='pokemon' />
                <p>{state.number}</p>
                <p>{state.name}</p>
                {state.types.map((type) => (
                    <p key={`${state.id}+${type}`}>{type}</p>
                ))}
            </NavLink>
        </div>
    );
};
