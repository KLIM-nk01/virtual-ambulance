import React from 'react';
// import { socket } from '../../socket'
// import { io } from 'socket.io-client';
// import { ACTIONS } from '../../socket/actions'
// import Nav from './Nav/Nav';
import { RoomPageWrapper } from './RoomPageStyle';
import {useParams} from 'react-router'
import useWebRTC, {LOCAL_VIDEO} from '@hooks/useWebRTC';
// import {v4} from 'uuid'

function layout(clientsNumber = 1) {
  const pairs: any = Array.from({length: clientsNumber})
    .reduce((acc: any, next: any, index: any, arr: any) => {
      if (index % 2 === 0) {
        acc.push(arr.slice(index, index + 2));
      }

      return acc;
    }, []);

  const rowsNumber = pairs.length;
  const height = `${100 / rowsNumber}%`;

  return pairs.map((row: any, index: any, arr: any) => {

    if (index === arr.length - 1 && row.length === 1) {
      return [{
        width: '100%',
        height,
      }];
    }

    return row.map(() => ({
      width: '50%',
      height,
    }));
  }).flat();
}

const RoomPage: React.FC = () => {
   const {id: roomID} = useParams<{ id: string }>()
   
   const {clients, provideMediaRef} = useWebRTC(roomID);

  const videoLayout = layout(clients.length)

   console.log(roomID, clients)
  return (
    <RoomPageWrapper>
     <div style={{
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       flexWrap: 'wrap',
       height: '100vh',
     }}>
     {
      clients.map((clientID: any, index: number) => {
        return (
          <div key={clientID} style={videoLayout[index]}>
            <video
            width='100%'
            height='100%'
            ref={instance => {
              provideMediaRef(clientID, instance)
            }}
            autoPlay
            playsInline
            muted={clientID === LOCAL_VIDEO}
            />
          </div>
        )
      })
    }
       </div> 
   
      
    </RoomPageWrapper>
  );
};

export default RoomPage;
