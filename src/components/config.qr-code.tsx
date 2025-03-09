import { useConfigData, useFetchConfigUrl } from '@store';
import { useEffect } from 'react';
import QRCode from 'react-qr-code';

export default function ConfigQrCode() {
  const getUrl = useFetchConfigUrl();
  const url = useConfigData();
  useEffect(() => getUrl(), [getUrl]);
  return (
    <figure>
      {!url && <span className='loading loading-md' />}
      {url && <QRCode value={url} />}
    </figure>
  );
}
