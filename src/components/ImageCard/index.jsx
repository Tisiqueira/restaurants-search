import React from 'react';
import styled from 'styled-components';


export const Card = styled.div`
  min-width: 90px;
  height: 90px;
  border-radius: 8px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  
`;
const ImageCard = ({photo}) => <Card photo={photo}/>

export default ImageCard;