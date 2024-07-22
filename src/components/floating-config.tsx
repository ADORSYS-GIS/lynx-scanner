import { Divider, Dropdown } from 'react-daisyui';
import { useCallback, useEffect } from 'react';
import { themeChange } from 'theme-change';
import { useTranslation } from 'react-i18next';

interface ThemeButtonProps {
  themeName: 'valantine' | 'light' | 'dark';
}

function ThemeButton({ themeName }: ThemeButtonProps) {
  const { t } = useTranslation();
  return (
    <button
      data-set-theme={'lynx-' + themeName}
      data-act-class={'lynx-' + themeName}
    >
      {t('config.' + themeName)}
    </button>
  );
}

export function FloatingConfig() {
  const { i18n } = useTranslation();

  const changeLanguageHandler = useCallback(
    async (lang: 'de' | 'en') => {
      await i18n.changeLanguage(lang);
      location.reload();
    },
    [i18n]
  );
  useEffect(() => {
    themeChange(true);
  });
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Dropdown end horizontal="left" vertical="top">
        <Dropdown.Toggle className="btn-circle">Menu</Dropdown.Toggle>
        <Dropdown.Menu className="w-52 bg-base-200">
          <Dropdown.Item anchor={false}>
            <ThemeButton themeName="light" />
          </Dropdown.Item>
          <Dropdown.Item anchor={false}>
            <ThemeButton themeName="dark" />
          </Dropdown.Item>
          <Dropdown.Item anchor={false}>
            <ThemeButton themeName="valantine" />
          </Dropdown.Item>
          <Divider />
          <Dropdown.Item anchor={false}>
            <button onClick={() => changeLanguageHandler('en')}>English</button>
          </Dropdown.Item>
          <Dropdown.Item anchor={false}>
            <button onClick={() => changeLanguageHandler('de')}>Deutsch</button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
