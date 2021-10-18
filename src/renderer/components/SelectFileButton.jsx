import React from 'react';

const SelectFileButton = () => {
  const handleOnClick = () => {
    window.electron.ipcRenderer.openFileDialog();
  };

  return (
    <button type="button" onClick={handleOnClick}>
      <span role="img" aria-label="books">
        📚
      </span>
      選擇 xlsx 檔案
    </button>
  );
};

export default SelectFileButton;
