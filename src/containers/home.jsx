import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPokedex } from '../controllers/addPokedex';
import { Card } from '../components/card';

export const Home = () => {
    const list = useSelector((state) => state.Pokedex.list);
    const index = useSelector((state) => state.Pokedex.index);
    const dispatch = useDispatch();

    useEffect(() => {
        const getList = async () => {
            if (list.length === 0) {
                await addPokedex(index, list, dispatch);
            }
        };

        getList();
    }, [list, index, dispatch]);

    const load = async () => {
        await addPokedex(index, list, dispatch);
    };

    return (
        <div>
            {list.map((element) => (
                <Card
                    key={element.id}
                    id={element.id}
                    name={element.name}
                    number={element.number}
                    image={element.image}
                    types={element.types}
                    like={element.like}
                />
            ))}
            <button onClick={load}>cargar mas..</button>
        </div>
    );
};
