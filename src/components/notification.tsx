import {
  removeNotification,
  selectNotification,
  useAppDispatch,
  useAppSelector,
} from '@store';
import { useCallback } from 'react';
import { X } from 'react-feather';
import { twMerge } from 'tailwind-merge';

export function Notification() {
  const notifications = useAppSelector(selectNotification);
  const dispatch = useAppDispatch();
  const remove = useCallback(
    (id: string) => () => {
      dispatch(removeNotification(id));
    },
    [dispatch],
  );
  return (
    <div className='toast toast-start toast-bottom'>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={twMerge(
            'alert',
            notification.type === 'success' && 'alert-success',
            notification.type === 'error' && 'alert-error',
            notification.type === 'info' && 'alert-info',
          )}>
          <button
            className='btn btn-sm btn-soft btn-circle'
            onClick={remove(notification.id)}>
            <X />
          </button>
          <span>{notification.message}</span>
        </div>
      ))}
    </div>
  );
}
