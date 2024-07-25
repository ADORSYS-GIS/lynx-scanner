import React, { useState } from 'react';
import { useGetScansQuery } from '@api/scans.api.gen.ts';
import { Loading } from 'react-daisyui';
import { ScanListDump } from '../components/scan-list.dump.tsx';
import { Plus } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header.tsx';

export const Component: React.FC = () => {
  const [page, setPage] = useState(0);
  const { data: scans, isLoading } = useGetScansQuery({ page: page, size: 10 });

  const navigate = useNavigate();

  return (
    <>
      <Header
        back={false}
        Icon={Plus}
        title="Scans"
        onIconClick={() => navigate('/scans/add')}
      />

      {isLoading && <Loading />}

      {scans && (
        <ScanListDump
          page={page}
          scans={scans}
          onNext={() => setPage((prevState) => ++prevState)}
          onPrev={() => setPage((prevState) => --prevState)}
        />
      )}
    </>
  );
};
