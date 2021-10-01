import React from 'react';
import Avatar from '@assets/NoAvatar.png';
import { Container } from './PhotoCotainerStyle';

const PhotoContainer = () => {
  return (
    <Container>
      <img src={Avatar} alt="avatar" />
    </Container>
  );
};

export default PhotoContainer;
