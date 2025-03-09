import { LanguageSwitch } from '@components/language-switch.tsx';
import { ThemeToggle } from '@components/theme.tsx';
import { ReactNode } from 'react';
import { ArrowLeft, Icon } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface HeaderProps {
  title: string;
  Icon?: Icon;
  onIconClick: () => void;
  back: false;
}

interface BackHeaderProps {
  title: string;
  back: string;
}

interface RawTrail {
  trailing?: ReactNode;
}

export function Header({
  trailing,
  title,
  back,
  ...rest
}: RawTrail & (HeaderProps | BackHeaderProps)) {
  const nav = useNavigate();
  const { Icon, onIconClick } = rest as HeaderProps;
  const navBack = () => {
    nav('..');
  };
  return (
    <div
      className={twMerge('flex items-center gap-4', [
        back && 'justify-between',
      ])}>
      {back && (
        <button
          className='btn btn-soft btn-primary btn-circle'
          color='ghost'
          onClick={navBack}
          type='submit'>
          <ArrowLeft />
        </button>
      )}
      <h1 className='text-2xl ml-2'>{title}</h1>
      <div className='mx-auto' />
      {!back && Icon && (
        <button
          className='btn btn-soft btn-primary btn-circle'
          onClick={onIconClick}
          type='submit'>
          <Icon />
        </button>
      )}
      <ThemeToggle />
      <LanguageSwitch />
      {trailing}
    </div>
  );
}
