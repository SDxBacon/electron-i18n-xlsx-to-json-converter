/* eslint-disable import/no-named-as-default-member */
import { ipcMain, dialog, BrowserWindow } from 'electron';
import xlsxReader from './xlsxReader';
import {
  UPDATE_PROCESS_STATE,
  IMPORT_FILE_BUTTON_CLICK,
  NOTICE_PARSE_XLSX_RESULT,
  SAVE_PARSED_JSON_TO_FILE_SYSTEM,
} from './constants/channel';
import {
  STATE_START_XLSX_READING_PROCESS,
  STATE_PARSING_XLSX_FINISHED,
  STATE_JSON_WRITE_TO_FS_SUCCESS,
} from './constants/processStates';

/**
 * ipcMain on event: IMPORT_FILE_BUTTON_CLICK
 */
ipcMain.on(IMPORT_FILE_BUTTON_CLICK, async () => {
  const currentWindow = BrowserWindow.getFocusedWindow();
  const result = await dialog.showOpenDialog(currentWindow, {
    properties: ['openFile'],
    filters: [{ name: 'Xlsx', extensions: ['xlsx'] }],
  });

  // 取消選取
  if (result.canceled) {
    return;
  }

  // 傳遞開始process channel
  currentWindow.webContents.send(
    UPDATE_PROCESS_STATE,
    STATE_START_XLSX_READING_PROCESS
  );

  const dataJSON = await xlsxReader.parseXLSXToJson(result.filePaths[0]);

  currentWindow.webContents.send(
    UPDATE_PROCESS_STATE,
    STATE_PARSING_XLSX_FINISHED
  );

  currentWindow.webContents.send(NOTICE_PARSE_XLSX_RESULT, dataJSON);
});

/**
 * ipcMain on event: SAVE_PARSED_JSON_TO_FILE_SYSTEM
 */
ipcMain.on(SAVE_PARSED_JSON_TO_FILE_SYSTEM, async (_, data) => {
  const currentWindow = BrowserWindow.getFocusedWindow();
  const result = await xlsxReader.writeJsonToFileSystem(data);
  if (result) {
    currentWindow.webContents.send(
      UPDATE_PROCESS_STATE,
      STATE_JSON_WRITE_TO_FS_SUCCESS
    );
  }
});
