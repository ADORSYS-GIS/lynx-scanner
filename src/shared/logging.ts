export async function setupLogging() {
  const log = await import('electron-log/renderer');
  console.log = log.log;
  console.debug = log.debug;
  console.error = log.error;
  console.warn = log.warn;
  console.trace = log.verbose;
}
