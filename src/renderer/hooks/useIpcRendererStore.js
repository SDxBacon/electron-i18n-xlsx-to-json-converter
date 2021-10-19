import { useRef, useCallback, useState, useEffect } from 'react';

const useIpcRendererStore = () => {
  const outputDataJsonRef = useRef();
  const [processState, setProcessState] = useState();

  const handleSaveFileButtonClick = useCallback(() => {
    if (
      processState ===
      window.electron.constants.processStates.STATE_PARSING_XLSX_FINISHED
    ) {
      window.electron.ipcRenderer.saveParsedJsonToFs(outputDataJsonRef.current);
    }
  }, [processState]);

  /**
   * NOTICE_PARSE_XLSX_RESULT event listener
   */
  useEffect(() => {
    let listenerRef;
    const channel = window.electron.constants.channels.NOTICE_PARSE_XLSX_RESULT;

    window.electron.ipcRenderer.on(channel, (listener, dataJson) => {
      listenerRef = listener;
      outputDataJsonRef.current = dataJson;
    });

    return () => {
      if (listenerRef)
        window.electron.ipcRenderer.unsubscribe(channel, listenerRef);
    };
  }, []);

  /**
   * UPDATE_PROCESS_STATE listener
   */
  useEffect(() => {
    let listenerRef;
    const updateProcessChannel =
      window.electron.constants.channels.UPDATE_PROCESS_STATE;

    window.electron.ipcRenderer.on(
      updateProcessChannel,
      (listener, nextProcessState) => {
        listenerRef = listener;
        setProcessState(nextProcessState);
      }
    );

    return () => {
      if (listenerRef)
        window.electron.ipcRenderer.unsubscribe(
          updateProcessChannel,
          listenerRef
        );
    };
  }, []);

  return { processState, handleSaveFileButtonClick };
};

export default useIpcRendererStore;
