import './index.scss';
import { isElectron, setupLogging } from '@shared';
import * as Sentry from '@sentry/react';
import { i18nFn } from '@i18n';
import ReactDOM from 'react-dom/client';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { persistor, store } from '@store';
import { App } from './app.tsx';
import { PersistGate } from 'redux-persist/integration/react';

async function main() {
  if (isElectron) {
    await setupLogging();
  }

  const sentryDSN = import.meta.env.VITE_SENTRY_DSN;
  if (sentryDSN) {
    Sentry.init({
      dsn: sentryDSN,
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
  }

  const i18n = await i18nFn();

  const rootElement = document.getElementById('root') as HTMLElement;
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </I18nextProvider>
    </React.StrictMode>
  );
}

main();
