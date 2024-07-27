import React, { lazy } from 'react';
import { Card } from 'react-daisyui';
import { isElectron } from '@shared';
import { useTranslation } from 'react-i18next';

const ConfigQrCode = lazy(() => import('../components/config.qr-code'));
const ConfigScanButton = lazy(() => import('../components/config-scan.button'));
const ToListScanButton = lazy(
  () => import('../components/to-list-scan.button.tsx')
);

export const Component: React.FC = () => {
  const { t } = useTranslation('config');
  return (
    <div className="flex justify-center h-[100vh] items-center p-4">
      <Card className="max-w-sm border-0 sm:border-2 sm:bg-base-200">
        {isElectron && <ConfigQrCode />}
        <Card.Body>
          <Card.Title>{t('page')}</Card.Title>
          <p>{t('description')}</p>
          <Card.Actions>
            {!isElectron && <ConfigScanButton />}
            {isElectron && <ToListScanButton />}
          </Card.Actions>
        </Card.Body>
      </Card>
    </div>
  );
};
