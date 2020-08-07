import React, { useState } from 'react';
import styled from 'styled-components';
import { useInterval } from './useInterval';

let Container = styled.div`
  display: flex;
  justify-content: center;
`;

let Image = styled.img`
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const PhotoGallery = ({ images }) => {
  const maxPhotos = images.length;
  const [photoNum, setPhotoNum] = useState(0);

  useInterval(() => {
    setPhotoNum(photoNum < (maxPhotos - 1) ? photoNum + 1 : 0);
  }, 3000);

  return (
    <Container>
      <Image src={images[photoNum]}/>
    </Container>
  );
}

export default PhotoGallery;