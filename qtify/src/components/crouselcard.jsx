import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./card";
import './crouselcard.css';
import { useState } from "react";


export default function Carousel({cardData, type}){
    const [selectedCard, setSelectedCard] = useState(null);

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    afterChange: (current) => setSelectedCard(current)
};

const handleCardClick = (index) => {
    console.log("Clicked card index:", index);
    setSelectedCard(index);
}

return (
    <div className="slider-container">
        <Slider {...settings}>
            {cardData.length !==0 && cardData.map((card, index) => (
                <Cards key={card.id} onClick={() => handleCardClick(index)} card={card} type={type}/> 
            ))}
        </Slider>
    </div>
    )
}