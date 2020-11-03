import React from 'react';

export const Card = (props) => {
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${props.image}`;

    return (
        <div>
            {props.like ? <p>like</p> : <p>no like</p>}
            <img src={image} alt='pokemon' />
            <p>{props.number}</p>
            <p>{props.name}</p>
            {props.types.map((type) => (
                <p key={`${props.id}+${type}`}>{type}</p>
            ))}
        </div>
    );
};
