/** 開始讀取 XLSX 檔案流程 */
const STATE_START_XLSX_READING_PROCESS = 'start-xlsx-reading-process';

/** 解析 XLSX 完成 */
const STATE_PARSING_XLSX_FINISHED = 'parsing-xlsx-finished';

/** JSON 檔案輸出成功 */
const STATE_JSON_WRITE_TO_FS_SUCCESS = 'json-write-to-fs-success';

/**
 * CHANNEL SET
 */
const channelSet = {
  STATE_START_XLSX_READING_PROCESS,
  STATE_PARSING_XLSX_FINISHED,
  STATE_JSON_WRITE_TO_FS_SUCCESS,
};
module.exports = channelSet;
