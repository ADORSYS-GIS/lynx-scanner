import Camera, { CameraProps } from 'react-html5-camera-photo';
import { useAddErrorNotification, useExtractText } from '@store';
import 'react-html5-camera-photo/build/css/index.css';
import { useCallback } from 'react';

interface TakePictureProps {
  onTakePhoto: Required<CameraProps>['onTakePhoto'];
}

export function TakePicture({ onTakePhoto }: TakePictureProps) {
  const extractText = useExtractText();
  const addErrorNotification = useAddErrorNotification();
  const handleTakePhoto: Required<CameraProps>['onTakePhoto'] = useCallback(
    (dataUri) => {
      extractText(dataUri);
      onTakePhoto(dataUri);
    },
    [extractText, onTakePhoto]
  );

  const onCameraError: Required<CameraProps>['onCameraError'] = useCallback(
    (error) => {
      addErrorNotification(error.message);
    },
    [addErrorNotification]
  );

  return (
    <div>
      <Camera
        onCameraError={onCameraError}
        onTakePhoto={handleTakePhoto}
        isMaxResolution={true}
      />
    </div>
  );
}
