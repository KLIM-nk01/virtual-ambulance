import React from 'react';
import Avatar from '@assets/NoAvatar.png';
// import Button from '@components/common/Button/Button';
import { Container } from './PhotoCotainerStyle';

const PhotoContainer = () => {
  return (
    <Container>
      <img src={Avatar} alt="avatar" />
      {/* <Button round variant="contained">
        Edit
      </Button> */}
    </Container>
  );
};

export default PhotoContainer;
