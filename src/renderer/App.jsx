import React, { useLayoutEffect } from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import StateText from './components/StateText';
import SaveFileButton from './components/SaveFileButton';
import SelectFileButton from './components/SelectFileButton';
import LoadingIndicator from './components/LoadingIndicator';
import IpcRendererProvider from './components/IpcRendererProvider';
import icon from '../../assets/icon.svg';
import { version } from '../../package.json';
import './App.global.css';

const HomePage = () => {
  useLayoutEffect(() => {
    document.title += ` - ${version}`;
  }, []);

  return (
    <IpcRendererProvider>
      <div>
        <div className="Hello">
          <img width="200px" alt="icon" src={icon} />
        </div>

        {/* 狀態文字 */}
        <StateText />

        <div className="Hello">
          {/* 「選擇 xlsx 檔案」按鈕 */}
          <SelectFileButton />
          {/*  */}
          <SaveFileButton />
        </div>

        {/* 全域 Loading Indicator */}
        <LoadingIndicator />
      </div>
    </IpcRendererProvider>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}
