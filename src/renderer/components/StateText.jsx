import React from 'react';
import Styled from 'styled-components';
import useIpcRendererContext from '../hooks/useIpcRendererContext';

const H1 = Styled.h1`
  text-align: center;
`;

const getTextByProcessState = (processState) => {
  const PROCESS_STATES = window.electron.constants.processStates;

  switch (processState) {
    case PROCESS_STATES.STATE_START_XLSX_READING_PROCESS:
      return '正在解析 xlsx...';
    case PROCESS_STATES.STATE_PARSING_XLSX_FINISHED:
      return '解析 xlsx 成功 👍';
    case PROCESS_STATES.STATE_JSON_WRITE_TO_FS_SUCCESS:
      return '檔案輸出完成 ✅';
    default:
      return '請選擇欲翻譯的 xlsx 檔案';
  }
};

const StateText = () => {
  const { processState } = useIpcRendererContext();

  return <H1>{getTextByProcessState(processState)}</H1>;
};

export default StateText;
