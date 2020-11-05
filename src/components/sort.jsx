import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { sortBottom } from '../controllers/sortBottom';
import { sortTop } from '../controllers/sortTop'
import { sortAZ } from '../controllers/sortAZ';
import { sortZA } from '../controllers/sortZA';
import { sortHeightTop } from '../controllers/sortHeightTop';
import { sortHeightBottom } from '../controllers/sortHeightBottom';
import { sortWeightTop } from '../controllers/sortWeightTop';
import { sortWeightBottom } from '../controllers/sortWeightBottom';

export const Sort = () => {
    const [state, setState] = useState('bottom');
    const list = useSelector((state) => state.Pokedex.list);

    const handledChange = ({target}) => {
        setState(target.value);
    }

    const sort = () => {
        if(state === 'bottom'){
            return sortBottom(list);
        }
        if(state === 'top'){
            return sortTop(list);
        }
        if(state === 'AZ'){
            return sortAZ(list);
        }
        if(state === 'ZA'){
            return sortZA(list);
        }
        if(state === 'heightTop'){
            return sortHeightTop(list);
        }
        if(state === 'heightBottom'){
            return sortHeightBottom(list);
        }
        if(state === 'weigthTop'){
            return sortWeightTop(list);
        }
        if(state === 'weigthBottom'){
            return sortWeightBottom(list);
        }
    }

    return <>
        <select name="select" id="select" onChange={handledChange} >
            <option value="bottom">bottom</option>
            <option value="top">top</option>
            <option value="AZ">AZ</option>
            <option value="ZA">ZA</option>
            <option value="heightTop">heightTop</option>
            <option value="heightBottom">heightBottom</option>
            <option value="weigthTop">weigthTop</option>
            <option value="weigthBottom">weigthBottom</option>
        </select>
        <button onClick={sort} >Sort</button>
    </>
}