import React from "react";
import { useState, useEffect } from "react";

import Cards from "./card";
import './showCard.css';
import Grid from "@mui/material/Grid";
import Carousel from "./crouselcard";



export default function RenderCards({text}){
    const [cardData, setCardData] = useState([]);
    const [collapse, setCollapse] = useState(true);

    let url;

    if(text === "Top Albums"){
        url = "https://qtify-backend-labs.crio.do/albums/top";
    }else if(text === "New Albums"){
        url = "https://qtify-backend-labs.crio.do/albums/new";
    }

    const fetchCardData = async(url) =>{
        try {
            const response = await fetch(url);
            const finalData = await response.json();
    
            console.log(finalData);
            setCardData(finalData)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

      fetchCardData(url);

    }, [url])
    
    return(
    <>
        <div className="card-container">
            <div className="accordian"> 
                {text} 

                {collapse? (
                    <span 
                    className="show-all-button"
                    onClick={()=>setCollapse(!collapse)}
                    > 
                    Show all 
                    </span>
                ):(
                    <span 
                    className="show-all-button"
                    onClick={()=>setCollapse(!collapse)}
                    > 
                    Collapse 
                    </span>
                )}


            </div>
            <div className="show-cards">
                {collapse?(
                    <Carousel cardData={cardData}/>
                ):(
                    <Grid container spacing={3}>
                        {cardData.length !==0 && cardData.map((card) => (
                            <Grid item key={card.id} xs={6} md={2}  >
                            <Cards card={card} />
                            </Grid>
                        ))}
                    </Grid>
                )}
                
            </div>
        </div>    
    </>
    )
}