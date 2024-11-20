import React, { useEffect, useState } from 'react';
import CharCard from '../../components/CharacterCard/character';
const Humans = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then((resp) => resp.json())
            .then((info) => {
                const humanCharacters = info.results.filter((character) => character.species === 'Human');
                setData(humanCharacters);
            });
    }, []);
    return (
        data.map((elem) => {
            return (
                <div key={elem.id}>
                    <CharCard img={elem.image} name={elem.name} id={elem.id} />
                </div>
            )
        })
    )
};

export default Humans;