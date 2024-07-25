import { Button } from 'react-daisyui';
import { ArrowLeft, Icon } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface HeaderProps {
  title: string;
  Icon?: Icon;
  onIconClick: () => void;
  back: false;
}

interface BackHeaderProps {
  title: string;
  back: true;
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
    <div className={`flex items-center ${back ? '' : 'justify-between'}`}>
      {back && (
        <Button color="ghost" onClick={navBack} shape="circle">
          <ArrowLeft />
        </Button>
      )}
      <h1 className="text-2xl">{title}</h1>
      <div className="mx-auto" />
      {!back && Icon && (
        <Button color="ghost" onClick={onIconClick} shape="circle">
          <Icon />
        </Button>
      )}
      {trailing}
    </div>
  );
}
