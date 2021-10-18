import { ipcMain, dialog } from 'electron';
import { OPEN_FILE_DIALOG } from './constants/channel';

ipcMain.on(OPEN_FILE_DIALOG, async () => {
  // const currentWindow = BrowserWindow.getCurrentWindow();
  dialog.showOpenDialog({ properties: ['openFile'] });
});
