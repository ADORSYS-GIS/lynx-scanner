import { Button, Divider, Dropdown } from 'react-daisyui';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from 'react-feather';

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

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Dropdown end horizontal="left" vertical="top">
        <Dropdown.Toggle button={false}>
          <Button color="primary" shape="circle">
            <Menu />
          </Button>
        </Dropdown.Toggle>
        <Dropdown.Menu className="w-52 bg-base-100">
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
          <Divider />
          <Dropdown.Item anchor={false}>
            <a href="/config">Config</a>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
