import React, { useEffect, useState } from 'react';
import CharCard from '../../components/CharacterCard/character';
const aliens = ()=> {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then((resp) => resp.json())
            .then((info) => {
                const aliensCharacters = info.results.filter((character) => character.species === 'Alien');
                setData(aliensCharacters);
            });
    }, []);
    return (
        data.map((elem) => {
            return (
                <div key={elem.id}>
                    <CharCard img={elem.image} name={elem.name} id={elem.id}/>
                </div>
            )
        })
    )
}

export default aliens
