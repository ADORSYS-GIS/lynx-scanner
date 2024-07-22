import React from 'react';
import { Button } from 'react-daisyui';
import { ArrowLeft } from 'react-feather';
import { useNavigate } from 'react-router-dom';

export const Component: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <div className="flex items-center gap-2">
        <Button color="ghost" onClick={() => navigate('..')} shape="circle">
          <ArrowLeft />
        </Button>
        <h1 className="text-2xl">Scan</h1>
      </div>

      <div className="bg-base-100">TODO: Form & Camera will be here</div>
    </div>
  );
};
