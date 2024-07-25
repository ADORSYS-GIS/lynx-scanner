import React, { useState } from 'react';
import { Header } from '../components/header.tsx';
import {
  IDetectedBarcode,
  Scanner,
  useDevices,
} from '@yudiel/react-qr-scanner';
import { Button, Dropdown } from 'react-daisyui';
import { Camera } from 'react-feather';
import { setUrlConfig, useAppDispatch } from '../store';
import { useNavigate } from 'react-router-dom';

export const Component: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const devices = useDevices();
  const [deviceId, setDeviceId] = useState(
    devices.length > 0 ? devices[0].deviceId : ''
  );
  const onScan = (detectedCodes: IDetectedBarcode[]) => {
    for (const { rawValue, format } of detectedCodes) {
      if (format in ['qr_code', 'rm_qr_code', 'micro_qr_code']) {
        const config = JSON.parse(rawValue) as Record<string, string>;
        dispatch(setUrlConfig(config.url));
        navigate('..');
      }
    }
  };
  return (
    <div className="flex flex-col">
      <div className="p-4">
        <Header
          title="Configs"
          back={true}
          trailing={
            <Dropdown horizontal="left">
              <Dropdown.Toggle button={false}>
                <Button shape="circle">
                  <Camera />
                </Button>
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-72 z-50">
                {devices.map(({ deviceId, label }) => (
                  <Dropdown.Item anchor={false} key={deviceId}>
                    <button onClick={() => setDeviceId(deviceId)}>
                      <Camera />
                      {label}
                    </button>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          }
        />
      </div>
      <div className="bg-primary h-[calc(100vh-80px)]">
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
