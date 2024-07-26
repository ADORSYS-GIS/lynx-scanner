import type { Scan } from '@api';
import { Button, Pagination } from 'react-daisyui';
import { ArrowLeft, ArrowRight } from 'react-feather';

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
  return (
    <div>
      {scans.map((scan) => (
        <div key={scan.id} className="p-4 border border-gray-300 rounded-md">
          <h3 className="font-bold">{scan.title}</h3>
          <pre>{JSON.stringify(scan.meta_data, null, 4)}</pre>
        </div>
      ))}

      <Pagination>
        <Button onClick={onPrev} className="join-item">
          <ArrowLeft />
        </Button>
        <Button className="join-item">Page {page}</Button>
        <Button onClick={onNext} className="join-item">
          <ArrowRight />
        </Button>
      </Pagination>
    </div>
  );
}
