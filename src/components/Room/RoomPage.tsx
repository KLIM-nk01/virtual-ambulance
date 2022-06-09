import React, { useState } from 'react';
// import { socket } from '../../socket'
// import { io } from 'socket.io-client';
// import { ACTIONS } from '../../socket/actions'
// import Nav from './Nav/Nav';
import { RoomPageWrapper, VideoWrapper, ControlsWrapper } from './RoomPageStyle';
import { useParams } from 'react-router';
import useWebRTC, { LOCAL_VIDEO } from '@hooks/useWebRTC'; //{ LOCAL_VIDEO }
import Button from '@components/common/Button/Button';
import { Redirect } from 'react-router-dom';
import { ROUTS } from '@constants/routs';
// import {v4} from 'uuid'

import { useTypesSelector } from '@hooks/UseTypedSelector';

function layout(clientsNumber = 1) {
  const pairs: any = Array.from({ length: clientsNumber }).reduce(
    (acc: any, next: any, index: any, arr: any) => {
      if (index % 2 === 0) {
        acc.push(arr.slice(index, index + 2));
      }

      return acc;
    },
    []
  );

  // const rowsNumber = pairs.length;

  return pairs
    .map((row: any, index: any, arr: any) => {
      if (index === arr.length - 1 && row.length === 1) {
        return [
          {
            width: '100%',
          },
        ];
      }

      return row.map(() => ({
        width: '47%',
        margin: '10px',
      }));
    })
    .flat();
}

const RoomPage: React.FC = () => {
  const { id: roomID } = useParams<{ id: string }>();

  const { clients, provideMediaRef } = useWebRTC(roomID);

  const videoLayout = layout(clients.length);
  const [muted, setMuted] = useState(false);
  const [viewVideo, setViewVideo] = useState(true);

  // const { isAuth } = useTypesSelector((state) => state.user);
  // if (!isAuth) return <Redirect to={ROUTS.SIGNIN_FORM} />;
  console.log(clients);
  return (
    <RoomPageWrapper>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {clients.map((clientID: any, index: number) => {
          return (
            <div key={clientID} style={videoLayout[index]}>
              <VideoWrapper
                ref={(instance) => {
                  provideMediaRef(clientID, instance);
                }}
                autoPlay
                playsInline
                muted={muted} //clientID === LOCAL_VIDEO
                hidden={clientID === LOCAL_VIDEO && !viewVideo}
              />
            </div>
          );
        })}
      </div>
      <ControlsWrapper>
        <Button
          onClick={() => setMuted(!muted)}
          size="small"
          variant={muted ? 'contained' : 'outlined'}
          round
        >
          {!muted ? 'Отключить микрофон' : 'Включить мирофон'}
        </Button>
        <Button
          onClick={() => setViewVideo(!viewVideo)}
          size="small"
          variant={!viewVideo ? 'contained' : 'outlined'}
          round
        >
          {!viewVideo ? 'Включить видео' : 'Отключить видео'}
        </Button>
      </ControlsWrapper>
    </RoomPageWrapper>
  );
};

export default RoomPage;
