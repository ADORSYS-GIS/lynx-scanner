import React from 'react';
import { useTranslation } from 'react-i18next';

const Homepage: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <>
      <h1>Home</h1>
      <div>
        <select onChange={changeLanguage} value={i18n.language}>
          <option value="en">English</option>
          <option value="de">Deutsch</option>
        </select>
      </div>
      <div>{t('welcome')}</div>
    </>
  );
};

export default Homepage;
