import { useCallback } from 'react';
import { Button } from 'react-daisyui';
import { ArrowRight } from 'react-feather';
import { useNavigate } from 'react-router-dom';

export default function ToListScanButton() {
  const navigate = useNavigate();
  const toScans = useCallback(() => navigate('/scans'), [navigate]);

  return (
    <Button fullWidth color="primary" onClick={toScans}>
      <span>To Scans</span>
      <ArrowRight />
    </Button>
  );
}
