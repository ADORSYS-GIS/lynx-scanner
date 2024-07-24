import { urlConfigSelector, useAppSelector, useFetchConfigUrl } from '../store';
import { Loading } from 'react-daisyui';
import QRCode from 'react-qr-code';
import { useEffect } from 'react';

export default function ConfigQrCode() {
  const getUrl = useFetchConfigUrl();
  const url = useAppSelector(urlConfigSelector);
  useEffect(() => getUrl(), [getUrl]);
  return (
    <figure>
      {!url && <Loading />}
      {url && <QRCode value={url} />}
    </figure>
  );
}
