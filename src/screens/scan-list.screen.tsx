import React, { useState } from 'react';
import { useGetScansQuery } from '@api/scans.api.gen.ts';
import { Button, Loading } from 'react-daisyui';
import { ScanListDump } from '../components/scan-list.dump.tsx';
import { Plus } from 'react-feather';
import { useNavigate } from 'react-router-dom';

export const Component: React.FC = () => {
  const [page, setPage] = useState(0);
  const { data: scans, isLoading } = useGetScansQuery({ page: page, size: 10 });

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Scans</h1>
        <Button
          color="ghost"
          onClick={() => navigate('/scans/add')}
          shape="circle"
        >
          <Plus />
        </Button>
      </div>

      {isLoading && <Loading />}

      {scans && (
        <ScanListDump
          page={page}
          scans={scans}
          onNext={() => setPage((prevState) => ++prevState)}
          onPrev={() => setPage((prevState) => --prevState)}
        />
      )}
    </div>
  );
};
