import fs from 'fs';
import path from 'path';
import each from 'lodash/each';
import remove from 'lodash/remove';
import setWith from 'lodash/setWith';
import beautify from 'json-beautify';
import excelToJson from 'convert-excel-to-json';
import { dialog, BrowserWindow } from 'electron';

const parseExcel2JSON = (filePath) => {
  /**
   * FIXME: 暫時使用 convert-excel-to-json
   * 如果有 perf 改天可以改成透過 xlsx 直接存取
   */
  const dataXlsx = excelToJson({
    header: { rows: 1 },
    sourceFile: filePath,
    columnToKey: { '*': '{{columnHeader}}' },
  });

  const output = {};

  // FIXME: Big O(n^3)
  each(dataXlsx, (data, sheetName) => {
    const languageCodes = remove(Object.keys(data[0]), (k) => k !== 'key');

    each(data, (row) => {
      const { key } = row;
      each(languageCodes, (code) => {
        const strCellVal = String(row[code]); // cell value as string type
        const splitted = strCellVal.split(/\r?\n/);
        setWith(
          output,
          `[${code}][${sheetName}][${key}]`,
          splitted.length > 1
            ? splitted //
            : row[code], // TODO: 可能需要採用 strCellVal !?
          Object
        );
      });
    });
  });

  return output;
};

const selectOutputDirectory = async () => {
  const currentWindow = BrowserWindow.getFocusedWindow();
  const result = await dialog.showOpenDialog(currentWindow, {
    properties: ['openDirectory'],
  });

  // 取消選取
  if (result.canceled) {
    return null;
  }
  return result.filePaths[0];
};

export const writeJsonToFileSystem = async (data) => {
  const filePath = await selectOutputDirectory();
  if (filePath) {
    each(data, (payload, languageCode) => {
      const fp = path.join(filePath, `${languageCode}.json`);
      fs.writeFileSync(fp, beautify(payload, null, 2, 100));
    });

    return true;
  }

  return null;
};

/**
 *
 * @param {string} filePath
 * @returns
 */
export const parseXLSXToJson = async (filePath) => {
  if (fs.existsSync(filePath)) {
    // start parsing excel to JSON object
    const parsedData = parseExcel2JSON(filePath);
    return parsedData;
  }

  // file not exist
  return null;
};

export default {
  parseXLSXToJson,
  writeJsonToFileSystem,
};
