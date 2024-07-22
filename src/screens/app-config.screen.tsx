import React, { useCallback, useEffect } from 'react';
import { t } from 'i18next';
import { Button, Card } from 'react-daisyui';
import { useNavigate } from 'react-router-dom';

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

  useEffect(() => {
    const config = checkConfig();
    if (config) {
      navigate('/scans');
    }
  }, [navigate]);
  return (
    <div className="flex justify-center items-center h-[100vh] p-4">
      <Card className="max-w-sm border-0 sm:border-2 sm:bg-base-200">
        <Card.Body>
          <Card.Title>{t('config.page')}</Card.Title>
          <p>{t('config.description')}</p>
          <Card.Actions>
            <Button onClick={scanConfigAndPersist} color="primary">
              Scan
            </Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    </div>
  );
};
