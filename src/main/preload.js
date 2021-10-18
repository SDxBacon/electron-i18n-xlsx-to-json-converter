const { contextBridge, ipcRenderer } = require('electron');
// const { OPEN_FILE_DIALOG } = require('./constants/channel');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    openFileDialog() {
      ipcRenderer.send('open-file-dialog');
    },
  },
});
