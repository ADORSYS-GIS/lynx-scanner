import { useCallback } from 'react';
import { Globe } from 'react-feather';
import { useTranslation } from 'react-i18next';

export function LanguageSwitch() {
  const { i18n } = useTranslation();

  const changeLanguageHandler = useCallback(
    async (lang: 'de' | 'en') => {
      await i18n.changeLanguage(lang);
      location.reload();
    },
    [i18n],
  );

  return (
    <details className='dropdown dropdown-left'>
      <summary className='btn btn-circle btn-soft btn-primary'>
        <Globe />
      </summary>

      <ul className='menu dropdown-content rounded-box mr-2 w-52 bg-base-100'>
        <li>
          <button onClick={() => changeLanguageHandler('en')}>
            <span>English</span>
          </button>
        </li>
        <li>
          <button onClick={() => changeLanguageHandler('de')}>
            <span>Deutsch</span>
          </button>
        </li>
      </ul>
    </details>
  );
}
