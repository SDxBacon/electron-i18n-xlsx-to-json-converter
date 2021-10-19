import React from 'react';
import useIpcRendererContext from '../hooks/useIpcRendererContext';

const SaveFileButton = () => {
  const { handleSaveFileButtonClick } = useIpcRendererContext();

  return (
    <button type="button" onClick={handleSaveFileButtonClick}>
      <span role="img" aria-label="books">
        💾
      </span>
      輸出 JSON 檔
    </button>
  );
};

export default SaveFileButton;
