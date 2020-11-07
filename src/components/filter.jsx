import React, { useState } from 'react';
import { filterPokedex } from '../controllers/filterPokedex'

export const Filter = (props) => {
    const [list] = useState(props.list);
    const [inputs, setInputs] = useState({
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
        setInputs({
            ...inputs,
            [target.name]: !inputs[target.name]
        });
    };

    const search = () => {
        const filters = [];
        
        Object.entries(inputs).map(element => 
            element[1] === true ? filters.push(element[0]) : null
        );
        
        props.handledFilter(filterPokedex(list, filters));
    }

    return (
        <div>
            <form id='filter'>
                {Object.keys(inputs).map(key => (
                    <div key={key}>
                        <label>{key}</label>
                        <input
                            type='checkbox'
                            name={key}
                            value={key}
                            onChange={handleToggle}
                        />
                    </div>
                ))}
            </form>
            <button onClick={search}>Search</button>
        </div>
    );
};