import React from 'react'
import Button from '@mui/material/Button';
import "./Header.css"
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className='header'>
            <img id='image-movie' src="https://wallpapers.com/images/featured/imagenes-de-rick-and-morty-b3e2pq02sb2fuvy3.jpg" alt="rickandMorty" />
            <h1>Rick and Morty</h1>
            <p>- Movie App -</p>
            <Link to={"/"}>
            <Button className='Button' sx={{ margin: 3, width: 150 }} variant="contained">Inicio</Button>
            </Link>
            <Link to={"/aliens"}>
            <Button className='Button' sx={{ margin: 3, width: 150 }} variant="contained">Aliens</Button>
            </Link>
            <Link to={"/humans"}>
            <Button className='Button' sx={{ margin: 3, width: 150 }} variant="contained">Humans</Button>
            </Link>
            <Link to={"/acerca"}>
            <Button className='Button' sx={{ margin: 3, width: 150 }} variant="contained">Acerca de</Button>
            </Link>
        </header>
    )
}

export default Header
