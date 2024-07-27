import { Button, Divider, Dropdown } from 'react-daisyui';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BarChart2, Globe, List, Menu, Settings } from 'react-feather';
import { Link } from 'react-router-dom';
import { themeChange } from 'theme-change';

interface ThemeButtonProps {
  themeName: 'valantine' | 'light' | 'dark';
}

function ThemeButton({ themeName }: ThemeButtonProps) {
  const { t: tC } = useTranslation('config');
  return (
    <button
      data-set-theme={'lynx-' + themeName}
      data-act-class={'lynx-' + themeName}
    >
      <BarChart2 />
      {tC(themeName)}
    </button>
  );
}

export function FloatingConfig() {
  useEffect(() => {
    themeChange(false);
  }, []);

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
            <button onClick={() => changeLanguageHandler('en')}>
              <Globe />
              <span>English</span>
            </button>
          </Dropdown.Item>
          <Dropdown.Item anchor={false}>
            <button onClick={() => changeLanguageHandler('de')}>
              <Globe />
              <span>Deutsch</span>
            </button>
          </Dropdown.Item>
          <Divider />
          <Dropdown.Item anchor={false}>
            <Link to="/config">
              <Settings />
              <span>Config</span>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item anchor={false}>
            <Link to="/scans">
              <List />
              <span>Scans</span>
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
