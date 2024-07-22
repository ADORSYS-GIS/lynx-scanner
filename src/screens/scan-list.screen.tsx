import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Scan = any; // 'TODO: Define the scan type';

export const Component: React.FC = () => {
  const scans: Scan[] = [];
  return (
    <div className="flex flex-row space-x-4">
      {scans.map((scan) => (
        <div key={scan.id} className="p-4 border border-gray-300 rounded-md">
          <img
            src={scan.imageUrl}
            alt={scan.title}
            className="mb-2 rounded-md w-40 h-auto"
          />
          <h3 className="font-bold">{scan.title}</h3>
          <p>{scan.rawData}</p>
        </div>
      ))}
    </div>
  );
};
