import React from "react";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from "./card";
import './showCard.css';
import Grid from "@mui/material/Grid";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}>
        
        <i class="fa-duotone fa-angle-right"
        style={{ width: "30px", height: "30px", color: "white", borderRadius:"50%", padding: "32px", }}></i>

        {/* <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 320 512"
        style={{ width: "30px", height: "30px", color: "white", borderRadius:"50%", padding: "32px", }}
        >
        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
        </svg> */}

        </div>
    );
  }

function Responsive({cardData}) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />, // Custom next arrow style
        // prevArrow: <div className="custom-prev-arrow" />
      };
      return (
        <div className="slider-container">
            <Slider {...settings}>
                {cardData.length !==0 && cardData.map((card) => (
                    <Cards key={card.id} card={card} /> 
                ))}
          </Slider>
        </div>
      );
  }


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
                    <Responsive cardData={cardData}/>
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