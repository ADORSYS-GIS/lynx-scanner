import {
  removeNotification,
  selectNotifications,
  useAppDispatch,
  useAppSelector,
} from '../store';
import { Alert, Button, Toast } from 'react-daisyui';
import { useCallback } from 'react';
import { X } from 'react-feather';

export function Notification() {
  const notifications = useAppSelector(selectNotifications);
  const dispatch = useAppDispatch();
  const remove = useCallback(
    (msg: string) => () => {
      dispatch(removeNotification(msg));
    },
    [dispatch]
  );
  return (
    <div className="">
      {notifications.map((message, index) => (
        <Toast horizontal="start" vertical="bottom" key={index}>
          <Alert status="error">
            <Button
              onClick={remove(message)}
              color="ghost"
              size="sm"
              shape="circle"
            >
              <X />
            </Button>
            <span>{message}</span>
          </Alert>
        </Toast>
      ))}
    </div>
  );
}
