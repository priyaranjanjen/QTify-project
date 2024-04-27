import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./card";
import './crouselcard.css';


export default function Carousel({cardData}){

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
};

return (
    <div className="slider-container">
        <Slider {...settings}>
            {cardData.length !==0 && cardData.map((card) => (
                <Cards key={card.id} card={card} /> 
            ))}
        </Slider>
    </div>
    )
}