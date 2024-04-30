import * as React from 'react';
import { Card, CardActionArea, CardMedia, Typography, CardContent, Chip } from '@mui/material';

// import image from '../assets/hero_headphones.png';
import './card.css'

export default function Cards({card, type}) {

  console.log(card)

  return (
    <>
      <div className='card-body'>  
        {/* {console.log(card)} */}

        <Card className='card'>
          <CardActionArea >
            <CardMedia
              className='card-image'
              component="img"
              // height="50px"
              image= {card.image}
              alt={card.title}
            />
            <CardContent>
            {type === "Songs"?(
                <Chip label={`${card.likes} likes`} sx={{background:'black', color:'white'}}/>
              ):(
              <Chip label={`${card.follows} follows`} sx={{background:'black', color:'white'}}/>
              )
              }
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <Typography variant="h5" 
      sx={{
          color: "white",
          textAlign: "center"
      }}>
          {card.title}
      </Typography>
    </>
     
  );
}

