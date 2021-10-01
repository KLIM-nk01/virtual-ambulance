import React from 'react';
import ReactDOM from 'react-dom';

const Portal: React.FC = ({ children }) => {
  const PoralDiv = document.getElementById('portal');
  return PoralDiv && ReactDOM.createPortal(children, PoralDiv);
};

export default Portal;
