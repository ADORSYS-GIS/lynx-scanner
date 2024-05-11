import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app.tsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './index.scss';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
