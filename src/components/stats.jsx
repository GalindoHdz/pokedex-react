import React from 'react';

export const Stats = (props) => {  
    const fillMap = (stats) => {
        let listStat = {
            PS: [],
            Ataque: [],
            Defensa: [],
            AE: [],
            DE: [],
            Velocidad: [],
        }

        let listFill = {
            PS: [],
            Ataque: [],
            Defensa: [],
            AE: [],
            DE: [],
            Velocidad: [],
        }

        Object.keys(listStat).map((element, index) => {        
            for (let i = 0; i < Math.ceil(stats[index].value / 10) - 1 && i < 15 ; i++) {
                listStat[element].push(i);
            }

            for (let i = 14; i >= Math.ceil(stats[index].value / 10) - 1; i--) {
                listFill[element].push(i);
            }
        });

        return {
            listStat,
            listFill
        };
    }

    const lists = fillMap(props.stats);

    return (
        <div className='stats'>
            <p>Puntos base</p>
            <div>
                <div>
                    <ul>
                        {
                            Object.keys(lists.listFill.PS).map(fill => (
                                <li className='fill' key={`${fill}+fill`}></li>
                            ))
                        }
                        {
                            Object.keys(lists.listStat.PS).map(stat => (
                                <li className='stat' key={`${stat}+stat`}></li>
                            ))
                        }
                    </ul>
                    <p>PS</p>
                </div>
                <div>
                    <ul>
                        {
                            Object.keys(lists.listFill.Ataque).map(fill => (
                                <li className='fill' key={`${fill}+fill`}></li>
                            ))
                        }
                        {
                            Object.keys(lists.listStat.Ataque).map(stat => (
                                <li className='stat' key={`${stat}+stat`}></li>
                            ))
                        }
                    </ul>
                    <p>Ataque</p>
                </div>
                <div>
                    <ul>
                        {
                            Object.keys(lists.listFill.Defensa).map(fill => (
                                <li className='fill' key={`${fill}+fill`}></li>
                            ))
                        }
                        {
                            Object.keys(lists.listStat.Defensa).map(stat => (
                                <li className='stat' key={`${stat}+stat`}></li>
                            ))
                        }
                    </ul>
                    <p>Defensa</p>
                </div>
                <div>
                    <ul>
                        {
                            Object.keys(lists.listFill.AE).map(fill => (
                                <li className='fill' key={`${fill}+fill`}></li>
                            ))
                        }
                        {
                            Object.keys(lists.listStat.AE).map(stat => (
                                <li className='stat' key={`${stat}+stat`}></li>
                            ))
                        }
                    </ul>
                    <p>Ataque Epecial</p>
                </div>
                <div>
                    <ul>
                        {
                            Object.keys(lists.listFill.DE).map(fill => (
                                <li className='fill' key={`${fill}+fill`}></li>
                            ))
                        }
                        {
                            Object.keys(lists.listStat.DE).map(stat => (
                                <li className='stat' key={`${stat}+stat`}></li>
                            ))
                        }
                    </ul>
                    <p>Defensa Epecial</p>
                </div>
                <div>
                    <ul>
                        {
                            Object.keys(lists.listFill.Velocidad).map(fill => (
                                <li className='fill' key={`${fill}+fill`}></li>
                            ))
                        }
                        {
                            Object.keys(lists.listStat.Velocidad).map(stat => (
                                <li className='stat' key={`${stat}+stat`}></li>
                            ))
                        }
                    </ul>
                    <p>Velocidad</p>
                </div>
            </div>
        </div>
    );
}