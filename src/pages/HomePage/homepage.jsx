import React from 'react'
import { useEffect, useState } from 'react';
import CharCard from "../../components/CharacterCard/character";
const homepage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then(resp => resp.json())
            .then(info => setData(info.results))

    }, [])

    return (
        data.map((elem) => {
            return (
                <div key={elem.id}>
                    <CharCard img={elem.image} name={elem.name} id={elem.id} />
                </div>
            )
        })
    )
}

export default homepage
