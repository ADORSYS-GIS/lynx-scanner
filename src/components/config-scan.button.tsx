import { useCallback } from 'react';
import { Button } from 'react-daisyui';
import { useNavigate } from 'react-router-dom';

export default function ConfigScanButton() {
  const navigate = useNavigate();
  const scanConfigAndPersist = useCallback(
    () => navigate('/config/scan'),
    [navigate]
  );

  return (
    <Button fullWidth onClick={scanConfigAndPersist} color="primary">
      Scan
    </Button>
  );
}
