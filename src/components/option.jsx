import React from 'react';

export const Option = (props) => {
    return (
        <>
            <label>{props.option}</label>
            <input
                type='checkbox'
                name={props.option}
                id={props.option}
                value={props.option}
                onChange={props.handledChange}
            />
        </>
    );
};
