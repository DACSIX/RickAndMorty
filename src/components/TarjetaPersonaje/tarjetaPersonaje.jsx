import React from 'react'
import "./tarjetaPersonaje.css";
const tarjetaPersonaje = (props) => {
    return (
        <div className='personaje'>
            <h1>{props.name}</h1>
            <div className='contenedor'>
                <img className='imagen' src={props.img} alt="personaje" />
                <div className='informacion'>
                    <p className='texto'><span className='negrita'>Estado: </span>{props.status}</p>
                    <p className='texto'><span className='negrita'>Especie: </span>{props.species}</p>
                    <p className='texto'><span className='negrita'>Tipo: </span>{props.type}</p>
                    <p className='texto'><span className='negrita'>Genero: </span>{props.gender}</p>
                    <p className='texto'><span className='negrita'>Origen: </span>{props.origen}</p>
                </div>
            </div>
        </div>
    )
}

export default tarjetaPersonaje
