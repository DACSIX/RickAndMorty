import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import "./character.css";
const character = (props) => {
    return (
        <Card sx={{ maxWidth: 350, boxShadow: '0px 5px 15px 0px rgba(0, 0, 0, 0.48)' }}>
            <CardMedia
                sx={{ height: 345 }}
                image={props.img}
            />
            <CardContent>
                <Typography sx={{ textAlign: 'center', fontSize: "20px", fontWeight: "bold" }} gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
            </CardContent>
            <CardActions className='centrar'>
                <Link to={`/personaje/${props.id}`}>
                    <Button
                        size="small"
                        sx={{
                            backgroundColor: 'greenyellow',
                            border: '5px solid black',
                            width: '100%',
                            color: 'black',
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: 'limegreen',
                            },
                        }}
                    >
                        Más información
                    </Button>
                </Link>

            </CardActions>
        </Card>
    )
}

export default character
