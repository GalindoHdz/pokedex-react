import React, { useState } from 'react';
import { Option } from './option';

export const Filter = () => {
    const [state, setState] = useState({
        Bug: false,
        Dark: false,
        Dragon: false,
        Electric: false,
        Fairy: false,
        Fighting: false,
        Fire: false,
        Flying: false,
        Gost: false,
        Grass: false,
        Ground: false,
        Ice: false,
        Normal: false,
        Poision: false,
        Psychic: false,
        Rock: false,
        Steel: false,
        Water: false,
    });

    const options = (event) => {
        const value = event.target.value;

        console.log(state);
    };

    return (
        <div>
            <form id='filter'>
                <Option option={'Bug'} handledChange={options} />
                <Option option={'Dark'} handledChange={options} />
                <Option option={'Dragon'} handledChange={options} />
                <Option option={'Electric'} handledChange={options} />
                <Option option={'Fairy'} handledChange={options} />
                <Option option={'Fighting'} handledChange={options} />
                <Option option={'Fire'} handledChange={options} />
                <Option option={'Flying'} handledChange={options} />
                <Option option={'Gost'} handledChange={options} />
                <Option option={'Grass'} handledChange={options} />
                <Option option={'Ground'} handledChange={options} />
                <Option option={'Ice'} handledChange={options} />
                <Option option={'Normal'} handledChange={options} />
                <Option option={'Poision'} handledChange={options} />
                <Option option={'Psychic'} handledChange={options} />
                <Option option={'Rock'} handledChange={options} />
                <Option option={'Steel'} handledChange={options} />
                <Option option={'Water'} handledChange={options} />
            </form>
            <button onClick={options}>Search</button>
        </div>
    );
};
