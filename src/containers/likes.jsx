import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../components/card';

export const Likes = () => {
    const list = useSelector((state) => state.Likes.list);

    return (
        <div>
            {list.map((element) => (
                <Card key={element.id} index={element.id - 1} />
            ))}
        </div>
    );
};
