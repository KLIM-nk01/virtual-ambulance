import React, { useState, useRef, useEffect } from 'react';
import { ProfileWrapper, ProfileInformation, ProfileFeature } from './ProfileStyle';
import AboutContainer from './AboutContainer/AboutContainer';
import FeatureContainer from './FeatureContainer/FeatureContainer';
import PhotoContainer from './PhotoContainer/PhotoContainer';
import { socket } from '../../../socket';
import { ACTIONS } from '../../../socket/actions';

const Profile: React.FC = () => {
  const [rooms, updateRooms] = useState([]);

  const rootNode = useRef<HTMLDivElement | null>(null);
  rooms;

  useEffect(() => {
    socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] } = {}) => {
      if (rootNode.current) {
        updateRooms(rooms);
      }
    });
  }, []);

  return (
    <ProfileWrapper>
      <ProfileInformation>
        <PhotoContainer />
        <AboutContainer />
      </ProfileInformation>
      <ProfileFeature>
        <FeatureContainer />
      </ProfileFeature>
    </ProfileWrapper>
  );
};

export default Profile;
