export * from './constants';
export const setupLogging = async () => {
  try {
    await import('./logging');
  } catch (e) {
    console.error(e);
  }
};
