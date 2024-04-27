// import React from "react";
// import Slider from "react-slick";

// function Responsive() {
//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//       <Grid container spacing={3}>
//             {cardData.length !==0 && cardData.map((card) => (
//                 <Grid item key={card.id} xs={6} md={2}  >
//                 <Cards card={card} />
//                 </Grid>
//             ))}
//         </Grid>
//       </Slider>
//     </div>
//   );
// }

// export default Responsive;
