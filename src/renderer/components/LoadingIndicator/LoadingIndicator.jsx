import React, { useState, useEffect } from 'react';
import { Wrapper } from './Styled';

const LoadingIndicator = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let listenerRef;

    window.electron.ipcRenderer.on('start-reading-xlsx', (listener) => {
      listenerRef = listener;
      console.log('start-reading-xlsx');
    });

    return () => {
      if (listenerRef)
        window.electron.ipcRenderer.unsubscribe(
          'start-reading-xlsx',
          listenerRef
        );
    };
  }, []);

  if (!show) return null;
  return <Wrapper>123</Wrapper>;
};

export default LoadingIndicator;
