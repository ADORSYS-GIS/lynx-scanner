import React, { lazy, useEffect } from 'react';
import { t } from 'i18next';
import { Card } from 'react-daisyui';
import { useNavigate } from 'react-router-dom';
import { isElectron } from '../shared/constants.ts';
import { useSelector } from 'react-redux';
import { selectConfigUrl } from '@store';

const ConfigQrCode = lazy(() => import('../components/config.qr-code'));
const ConfigScanButton = lazy(() => import('../components/config-scan.button'));
const ToListScanButton = lazy(
  () => import('../components/to-list-scan.button.tsx')
);

export const Component: React.FC = () => {
  const navigate = useNavigate();

  const checkConfig = useSelector(selectConfigUrl);

  useEffect(() => {
    if (checkConfig) {
      navigate('/scans');
    }
  }, [checkConfig, navigate]);
  return (
    <div className="flex justify-center h-[100vh] items-center p-4">
      <Card className="max-w-sm border-0 sm:border-2 sm:bg-base-200">
        {isElectron && <ConfigQrCode />}
        <Card.Body>
          <Card.Title>{t('config.page')}</Card.Title>
          <p>{t('config.description')}</p>
          <Card.Actions>
            {!isElectron && <ConfigScanButton />}
            {isElectron && <ToListScanButton />}
          </Card.Actions>
        </Card.Body>
      </Card>
    </div>
  );
};
