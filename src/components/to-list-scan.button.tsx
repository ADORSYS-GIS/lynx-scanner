import { useCallback } from 'react';
import { ArrowRight } from 'react-feather';
import { useNavigate } from 'react-router-dom';

export default function ToListScanButton() {
  const navigate = useNavigate();
  const toScans = useCallback(() => navigate('/scans'), [navigate]);

  return (
    <button className='btn btn-soft btn-primary btn-block' onClick={toScans}>
      <span>To Scans</span>
      <ArrowRight />
    </button>
  );
}
