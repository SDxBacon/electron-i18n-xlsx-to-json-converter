const { contextBridge, ipcRenderer } = require('electron');
const channelSet = require('./constants/channel');
const processStates = require('./constants/processStates');

contextBridge.exposeInMainWorld('electron', {
  constants: {
    processStates,
    channels: channelSet,
  },

  ipcRenderer: {
    /** subscribe */
    on(channel, func) {
      const listener = (event, ...args) => {
        func(listener, ...args);
      };
      ipcRenderer.on(channel, listener);
    },
    /** unsubscribe */
    unsubscribe(channel, listener) {
      ipcRenderer.removeListener(channel, listener);
    },
    /** open file dialog */
    openFileDialog() {
      ipcRenderer.send(channelSet.IMPORT_FILE_BUTTON_CLICK);
    },
    /** saved parsed json data to file system */
    saveParsedJsonToFs(json) {
      ipcRenderer.send(channelSet.SAVE_PARSED_JSON_TO_FILE_SYSTEM, json);
    },
  },
});
