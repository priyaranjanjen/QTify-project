import * as React from 'react';
import { Card, CardActionArea, CardMedia, Typography, CardContent, Chip } from '@mui/material';

// import image from '../assets/hero_headphones.png';
import './card.css'

export default function Cards({card}) {

  return (
    <div className='card-body'>  
        {/* {console.log(card)} */}

        <Card className='card'>
        <CardActionArea>
            <CardMedia
            className='card-image'
            component="img"
            // height="50px"
            image= {card.image}
            alt={card.title}
            />
            <div className='text'>
            <Typography variant="h6">
                {card.title}
            </Typography>
            </div>
            <CardContent>

            <Chip label={`${card.follows} follows`} sx={{background:'black', color:'white'}}/>

            </CardContent>
        </CardActionArea>
        </Card>
        <Typography variant="h5" 
        sx={{
            color: "white",
            textAlign: "center"
        }}>
            new hindi song
        </Typography>
    </div>
  );
}
