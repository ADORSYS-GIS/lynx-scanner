import { LanguageSwitch } from '@components/language-switch.tsx';
import { ThemeToggle } from '@components/theme.tsx';
import type { PropsWithChildren } from 'react';
import { X } from 'react-feather';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface RouteUiModalProps {
  open: boolean;
}

export function RouteUiModal({
  children,
  open,
}: PropsWithChildren<RouteUiModalProps>) {
  const navigate = useNavigate();
  return (
    <div className={twMerge('modal', [open && 'modal-open'])}>
      <div className='modal-box relative'>
        <div className='flex flex-row gap-4 absolute right-2 top-2'>
          <ThemeToggle />
          <LanguageSwitch />
          <button
            className='btn btn-soft btn-circle btn-error'
            onClick={() => navigate(-1)}>
            <X />
          </button>
        </div>

        <div className='pt-4'>{children}</div>
      </div>
    </div>
  );
}

export function ModalLayout() {
  const { state } = useLocation();
  const background = state?.background;

  return background ? (
    <RouteUiModal open>
      <Outlet />
    </RouteUiModal>
  ) : (
    <Outlet />
  );
}
