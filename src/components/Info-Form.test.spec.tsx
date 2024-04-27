import { expect, test } from '@playwright/experimental-ct-react';
import { InfoButton } from './scaninfo.tsx';

test('should check if button appears', async ({ mount }) => {
  const button = await mount(<InfoButton />);
  await expect(button).toContainText('+');
});
