import './index.scss';
import { isElectron, setupLogging } from '@shared';
import { bootstrap } from '@shared/app.tsx';

if (isElectron) {
  setupLogging().then(() => {
    bootstrap();
  });
} else {
  bootstrap();
}
