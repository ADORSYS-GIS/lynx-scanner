'use client';

import { useEffect } from 'react';
import { Moon, Sun, Sunset } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { themeChange } from 'theme-change';

interface ThemeButtonProps {
  themeName: 'valentine' | 'emerald' | 'luxury';
  icon: React.ReactNode;
}

function ThemeButton({ themeName, icon }: ThemeButtonProps) {
  const { t: tC } = useTranslation('config');
  return (
    <button data-set-theme={themeName} data-act-class={themeName}>
      {icon}
      {tC(themeName)}
    </button>
  );
}

export function ThemeToggle() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <details className='dropdown dropdown-left'>
      <summary className='btn btn-circle btn-soft btn-primary'>
        <span className='hidden is-valentine'>
          <Sunset />
        </span>
        <span className='hidden is-emerald'>
          <Sun />
        </span>
        <span className='hidden is-luxury'>
          <Moon />
        </span>
      </summary>

      <ul className='menu dropdown-content rounded-box mr-2 w-52 z-50 bg-base-100'>
        <li data-theme='emerald' className='rounded-t-box'>
          <ThemeButton icon={<Sun />} themeName='emerald' />
        </li>
        <li data-theme='luxury'>
          <ThemeButton icon={<Moon />} themeName='luxury' />
        </li>
        <li data-theme='valentine' className='rounded-b-box'>
          <ThemeButton icon={<Sunset />} themeName='valentine' />
        </li>
      </ul>
    </details>
  );
}
