/** 選擇 xlsx 檔案按鈕被觸發 */
const IMPORT_FILE_BUTTON_CLICK = 'import-file-button-click';

/** 更新 process state */
const UPDATE_PROCESS_STATE = 'update-process-state';

/** main process 將解析xlsx結果通知 renderer process */
const NOTICE_PARSE_XLSX_RESULT = 'NOTICE_PARSE_XLSX_RESULT';

const SAVE_PARSED_JSON_TO_FILE_SYSTEM = 'SAVE_PARSED_JSON_TO_FILE_SYSTEM';

/**
 * CHANNEL SET
 */
const channelSet = {
  UPDATE_PROCESS_STATE,
  IMPORT_FILE_BUTTON_CLICK,
  NOTICE_PARSE_XLSX_RESULT,
  SAVE_PARSED_JSON_TO_FILE_SYSTEM,
};
module.exports = channelSet;
