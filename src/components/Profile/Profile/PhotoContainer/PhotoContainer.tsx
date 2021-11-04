import React from 'react';
import Avatar from '@assets/NoAvatar.png';
import { Container } from './PhotoCotainerStyle';
import { useTypesSelector } from '@hooks/UseTypedSelector';

const PhotoContainer = () => {
  const user = useTypesSelector((state) => state.user);
  return (
    <Container>
      <img src={user.currentUser.photo} alt="avatar" />
    </Container>
  );
};

export default PhotoContainer;
