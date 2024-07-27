import { useCallback } from 'react';
import { Button } from 'react-daisyui';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ConfigScanButton() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const scanConfigAndPersist = useCallback(
    () => navigate('/config/scan'),
    [navigate]
  );

  return (
    <Button fullWidth onClick={scanConfigAndPersist} color="primary">
      {t('action.scan')}
    </Button>
  );
}
