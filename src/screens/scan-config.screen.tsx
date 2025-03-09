import { setUrlConfig, useAppDispatch } from '@store';
import {
  IDetectedBarcode,
  Scanner,
  useDevices,
} from '@yudiel/react-qr-scanner';
import React, { useState } from 'react';
import { Camera } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header.tsx';

/**
 * ScanConfig screen component
 * @constructor React.FC
 */
export const Component: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const devices = useDevices();
  const [deviceId, setDeviceId] = useState(
    devices.length > 0 ? devices[0].deviceId : '',
  );
  const onScan = (detectedCodes: IDetectedBarcode[]) => {
    for (const { rawValue, format } of detectedCodes) {
      if (['qr_code', 'rm_qr_code', 'micro_qr_code'].includes(format)) {
        const config = JSON.parse(rawValue) as Record<string, string>;
        console.log({ config });
        dispatch(setUrlConfig(config.url));
        navigate('/scans');
      }
    }
  };
  return (
    <div className='flex flex-col'>
      <div className='p-4'>
        <Header
          title='Configs'
          back='..'
          trailing={
            <details className='dropdown dropdown-left'>
              <summary className='btn btn-circle btn-soft btn-primary'>
                <Camera />
              </summary>

              <ul className='menu dropdown-content bg-base-200 rounded-box shadow-sm mr-2 w-72 z-50'>
                {devices.map(({ deviceId, label }) => (
                  <li key={deviceId}>
                    <button onClick={() => setDeviceId(deviceId)}>
                      <Camera />
                      <span className='line-clamp-1'>{label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </details>
          }
        />
      </div>
      <div className='bg-primary h-[calc(100vh-80px)]'>
        <Scanner
          components={{
            audio: false,
            finder: false,
            tracker: (detectedCodes, ctx) => {
              for (const detectedCode of detectedCodes) {
                const { cornerPoints } = detectedCode;
                ctx.strokeStyle = '#f5f';
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.moveTo(cornerPoints[0].x, cornerPoints[0].y);
                ctx.lineTo(cornerPoints[1].x, cornerPoints[1].y);
                ctx.lineTo(cornerPoints[2].x, cornerPoints[2].y);
                ctx.lineTo(cornerPoints[3].x, cornerPoints[3].y);
                ctx.lineTo(cornerPoints[0].x, cornerPoints[0].y);
                ctx.stroke();
              }
            },
          }}
          classNames={{ video: 'object-cover' }}
          onScan={onScan}
          constraints={{
            deviceId,
          }}
        />
      </div>
    </div>
  );
};
