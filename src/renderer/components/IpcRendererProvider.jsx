/* eslint-disable react/prop-types */
import React from 'react';
import IpcRendererContext from '../context/IpcRendererContext';
import useIpcRendererStore from '../hooks/useIpcRendererStore';

const IpcRendererProvider = ({ children }) => {
  const value = useIpcRendererStore();

  return (
    <IpcRendererContext.Provider value={value}>
      {children}
    </IpcRendererContext.Provider>
  );
};
export default IpcRendererProvider;
