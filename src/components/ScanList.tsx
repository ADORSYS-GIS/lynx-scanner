import React from 'react';

interface Scan {
  id: number;
  title: string;
  rawData: string;
  imageUrl: string;
}

interface ScanListProps {
  scans: Scan[];
}

const ScanList: React.FC<ScanListProps> = ({ scans }) => {
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

export default ScanList;
