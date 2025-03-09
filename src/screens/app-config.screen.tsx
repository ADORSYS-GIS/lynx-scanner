import { LanguageSwitch } from '@components/language-switch.tsx';
import { ThemeToggle } from '@components/theme.tsx';
import { isElectron } from '@shared';
import { useAppSelector } from '@store';
import React, { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ManualConfig = lazy(() => import('../components/manual-config'));
const ConfigQrCode = lazy(() => import('../components/config.qr-code'));
const ConfigScanButton = lazy(() => import('../components/config-scan.button'));
const ToListScanButton = lazy(
  () => import('../components/to-list-scan.button.tsx'),
);

export const Component: React.FC = () => {
  const { t } = useTranslation('config');
  const configUrl = useAppSelector((state) => state.config.url);
  return (
    <div className='flex flex-col md:flex-row'>
      <div
        role='menu'
        className='bg-base-200 md:min-h-screen md:w-96 justify-end p-2 md:p-4 flex gap-4'>
        <ThemeToggle />
        <LanguageSwitch />
      </div>

      <div className='p-2 md:p-4 flex flex-col gap-4'>
        {isElectron && <ConfigQrCode />}
        <h2 className='app-title'>{t('page')}</h2>
        <p>{t('description')}</p>
        <div className='flex flex-row gap-4'>
          {!isElectron && <ConfigScanButton />}
          {isElectron && <ToListScanButton />}
          {!isElectron && <ManualConfig />}
          {configUrl && (
            <Link to='/scans' className='btn btn-soft btn-primary'>
              {t('action.scan')}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
