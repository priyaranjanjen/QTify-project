import React from "react";
import { useState, useEffect } from "react";

import Cards from "./card";
import './showCard.css';
import Grid from "@mui/material/Grid";

export default function RenderCards(){
    const [cardData, setCardData] = useState([]);
    const [collapse, setCollapse] = useState(false);

    const url = "https://qtify-backend-labs.crio.do/albums/top"

    const fetchCardData = async(url) =>{
        const response = await fetch(url);
        const finalData = await response.json();

        console.log(finalData);
        setCardData(finalData)
    }

    useEffect(() => {

      fetchCardData(url);

    }, [])
    
    return(
        <>
        <div className="show-card">
            <div className="accordian"> 
                Top Albums

                <span className="show-all"> 
                Show all </span>

            </div>
            <div className="show-card">
                <Grid container spacing={3}>
                    {cardData.length !==0 && cardData.map((card) => (
                        <Grid item key={card.id} md={2}>
                        <Cards card={card} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>    
        </>
    )
}