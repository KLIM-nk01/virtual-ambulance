import React from 'react';

const RoomPage = React.lazy(() => import('@components/Room/RoomPage'));

const RoomPageContainer = () => <RoomPage />;

export default RoomPageContainer;
