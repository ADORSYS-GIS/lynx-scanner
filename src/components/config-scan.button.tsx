import { useCallback } from 'react';
import { Search } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function ConfigScanButton() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const scanConfigAndPersist = useCallback(
    () => navigate('/config/scan'),
    [navigate],
  );

  return (
    <button className='btn btn-soft btn-primary' onClick={scanConfigAndPersist}>
      <span>{t('action.scan')}</span>
      <Search />
    </button>
  );
}
