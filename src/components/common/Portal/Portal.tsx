import React from 'react';
import ReactDOM from 'react-dom';

const Portal: React.FC = ({ children }) => {
  const PortalDiv = document.getElementById('portal');
  return PortalDiv && ReactDOM.createPortal(children, PortalDiv);
};

export default Portal;
