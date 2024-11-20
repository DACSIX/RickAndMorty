import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TarjetaPersonaje from '../../components/TarjetaPersonaje/tarjetaPersonaje';
const OneCharacter = () => {
  const { id } = useParams(); // Obtiene el ID del personaje desde la URL
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(resp => resp.json())
      .then(info => setData(info.results))

  }, [])

  return (
    data.map((elem) => {
      if (elem.id == id) {
        return (
          <div key={elem.id}>
            <TarjetaPersonaje name={elem.name} img={elem.image} status={elem.status} species={elem.species ? elem.species : "No Aplica"} type={elem.type ? elem.type : "No Aplica"}
              gender={elem.gender ? elem.gender : "No Aplica"} origen={elem.origin.name} />
          </div>
        )
      }
    })
  )
}

export default OneCharacter
