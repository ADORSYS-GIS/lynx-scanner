import React, { lazy, useCallback, useEffect } from 'react';
import { t } from 'i18next';
import { Button, Card } from 'react-daisyui';
import { useNavigate } from 'react-router-dom';
import { isElectron } from '../shared/constants.ts';
import { ArrowRight } from 'react-feather';

const ConfigQrCode = lazy(() => import('../components/config.qr-code'));

const configKey = 'lynx:config';

export const Component: React.FC = () => {
  const navigate = useNavigate();

  const checkConfig = () => {
    const item = localStorage.getItem(configKey);
    if (item) {
      return JSON.parse(item);
    }
  };
  const scanConfigAndPersist = useCallback(() => {
    console.log('scanConfigAndPersist');
  }, []);
  const toScans = useCallback(() => navigate('/scans'), [navigate]);

  useEffect(() => {
    const config = checkConfig();
    if (config) {
      navigate('/scans');
    }
  }, [navigate]);
  return (
    <div className="flex justify-center items-center h-[100vh] p-4">
      <Card className="max-w-sm border-0 sm:border-2 sm:bg-base-200">
        {isElectron && <ConfigQrCode />}
        <Card.Body>
          <Card.Title>{t('config.page')}</Card.Title>
          <p>{t('config.description')}</p>
          <Card.Actions>
            {isElectron && (
              <Button onClick={scanConfigAndPersist} color="primary">
                Scan
              </Button>
            )}
            <Button fullWidth color="primary" onClick={toScans}>
              <span>To Scans</span>
              <ArrowRight />
            </Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    </div>
  );
};
