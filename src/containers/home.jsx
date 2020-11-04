import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPokedex } from '../controllers/addPokedex';
import { Filter } from '../components/filter';
import { Card } from '../components/card';

export const Home = () => {
    const list = useSelector((state) => state.Pokedex.list);
    const index = useSelector((state) => state.Pokedex.index);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        index: 11,
    });

    useEffect(() => {
        const getList = async () => {
            if (list.length === 0) {
                await addPokedex(index, list, dispatch);
            }
        };

        getList();
    }, [list, index, dispatch]);

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
        <div>
            <Filter />
            {list.map((element, index) =>
                index <= state.index ? (
                    <Card key={element.id} index={element.id - 1} />
                ) : null
            )}
            {state.index < 892 ? (
                <button onClick={load}>cargar mas..</button>
            ) : null}
        </div>
    );
};
