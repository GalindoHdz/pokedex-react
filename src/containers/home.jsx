import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPokedex } from '../controllers/addPokedex';
import { Card } from '../components/card';

export const Home = () => {
    const list = useSelector((state) => state.Pokedex.list);
    const index = useSelector((state) => state.Pokedex.index);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        index: 21,
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
        if (state.index < index) {
            console.log('incrementar index local', state.index, index);
            setState({
                index: state.index + 20,
            });
        } else {
            console.log('incrementar index local y global', state.index, index);
            await addPokedex(index, list, dispatch);
            setState({
                index: state.index + 20,
            });
        }
    };

    return (
        <div>
            {list.map((element, index) =>
                index <= state.index ? (
                    <Card key={element.id} index={element.id - 1} />
                ) : null
            )}
            <button onClick={load}>cargar mas..</button>
        </div>
    );
};
