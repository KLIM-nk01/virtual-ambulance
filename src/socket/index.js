import { io } from 'socket.io-client';

// const options = {
//   'force new connection': true,
//   reconnectionAttempts: 'Infinity',
//   timeout: 10000,
//   transports: ['websocket'],
// };

export const socket = io('https://virtual-ambulance-server.herokuapp.com/', {
  withCredentials: true,
});
