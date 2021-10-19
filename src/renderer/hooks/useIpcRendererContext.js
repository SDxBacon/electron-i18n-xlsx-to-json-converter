import { useContext } from 'react';
import IpcRendererContext from '../context/IpcRendererContext';

const useIpcRendererContext = () => {
  return useContext(IpcRendererContext);
};

export default useIpcRendererContext;
