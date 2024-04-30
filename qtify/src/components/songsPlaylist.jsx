import React from "react";
import { useLocation } from "react-router-dom";

const SongsPlaylist = () => {
  const location = useLocation();
  const cardData = location.state ? location.state.cardData : null;

  if (!cardData) {
    return <div>No card data available.</div>;
  }

  return (
    <div>
      <h2>{cardData.title}</h2>
      <img src={cardData.image} alt={cardData.title} />
      <p>{cardData.description}</p>
    </div>
  );
}

export default SongsPlaylist;
    