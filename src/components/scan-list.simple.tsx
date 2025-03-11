import type { Scan } from '@api';
import { ArrowLeft, ArrowRight } from 'react-feather';
import { Link, useLocation } from 'react-router-dom';

export interface ScanListDumpProps {
  scans: Scan[];
  page: number;
  onNext: () => void;
  onPrev: () => void;
}

export function ScanListSimple({
  scans,
  onPrev,
  onNext,
  page,
}: ScanListDumpProps) {
  const location = useLocation();
  return (
    <div className='flex flex-col gap-4'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
        {scans.map((scan) => (
          <div key={scan.id} className='card card-dash'>
            <div className='card-body'>
              <h3 className='card-title'>{scan.title}</h3>
              <p>Some description of the scan. Lorem ipsum dolor sit amet,</p>
              <pre>{JSON.stringify(scan.meta_data, null, 4)}</pre>
              <div className='card-actions'>
                <Link
                  to={`/scans/${scan.id}`}
                  state={{ background: location }}
                  className='btn btn-soft btn-primary'>
                  View Scan
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='join'>
        <button onClick={onPrev} className='join-item btn btn-soft'>
          <ArrowLeft />
        </button>

        <button className='join-item btn btn-soft'>Page {page}</button>

        <button onClick={onNext} className='join-item btn btn-soft'>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
