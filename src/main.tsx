import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app.tsx';
import * as Sentry from '@sentry/react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import './index.scss';

Sentry.init({
  dsn: 'https://9fd06d22381ef360013d83b6b0c8375e@o4507214219313152.ingest.de.sentry.io/4507214225801296',
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ['localhost', /^https:\/\/localhost:\d+\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
