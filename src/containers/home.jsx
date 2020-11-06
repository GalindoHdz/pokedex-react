import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Filter } from '../components/filter';
import { Search } from '../components/search';
import { Sort } from '../components/sort'
import { Card } from '../components/card';

export const Home = () => {
    const list = useSelector((state) => state.Pokedex.list);
    const [state, setState] = useState({
        index: 11,
    });

    const load = async () => {
        if (state.index < 887) {
            setState({
                index: state.index + 12,
            });
        } else {
            setState({
                index: state.index + 5,
            });
        }
    };

    return (
        <div className='bg-gray-700 pt-10'>
            <Filter />
            <Search />
            <Sort />
            <div className='flex flex-wrap justify-center'>
                {list.map((element, index) =>
                    index <= state.index ? (
                        <Card key={element.id} index={element.id - 1} />
                    ) : null
                )}
                {state.index < 892 ? (
                    <button onClick={load}>cargar mas..</button>
                ) : null}
            </div>
        </div>
    );
};
