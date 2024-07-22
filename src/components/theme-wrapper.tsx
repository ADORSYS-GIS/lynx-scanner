import { PropsWithChildren, useEffect } from 'react';
import { themeChange } from 'theme-change';

export function ThemeWrapper({ children }: PropsWithChildren) {
  useEffect(() => {
    themeChange(true);
  }, []);

  return children;
}
