
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

import restaurante from '../../assets/restaurante-fake.png'
import { ImageSkeleton } from "../../components";

import { Restaurant, RestaurantInfo, RestaurantPhoto,Title, Adress} from "./styles";

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} value={restaurant.rating} edit={false} isHalf activeColor="#e7711c" />
        <Adress>{restaurant.vinicity || restaurant.formatted_address}</Adress>
      </RestaurantInfo>
      <RestaurantPhoto 
      imageLoaded={imageLoaded}
      src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} 
      onLoad={() => setImageLoaded(true)}
      alt="Foto do Restaurante"/>
      {!imageLoaded && <ImageSkeleton width="100px" height="100px"/>}
  </Restaurant>
  );
}


export default RestaurantCard;