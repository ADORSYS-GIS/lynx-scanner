import React from 'react';
import ScanList from './ScanList';

const scans = [
  {
    id: 1,
    title: 'Scan 1',
    rawData: 'Raw data for scan 1',
    imageUrl:
      'https://i.pinimg.com/736x/98/58/74/9858745cd157f2797065e639c5b3bf23.jpg',
  },
  {
    id: 2,
    title: 'Scan 2',
    rawData: 'Raw data for scan 2',
    imageUrl: 'https://example.com/scan2.jpg',
  },
  // Add more scan objects as needed
  {
    id: 3,
    title: 'Scan 3',
    rawData: 'Raw data for scan 3',
    imageUrl: 'https://example.com/scan2.jpg',
  },
  // Add more scan objects as needed
  {
    id: 4,
    title: 'Scan 4',
    rawData: 'Raw data for scan 4',
    imageUrl: 'https://example.com/scan2.jpg',
  },
  // Add more scan objects as needed
  {
    id: 5,
    title: 'Scan 5',
    rawData: 'Raw data for scan 5',
    imageUrl: 'https://example.com/scan2.jpg',
  },
  // Add more scan objects as needed
];

const ScanViewer: React.FC = () => {
  return (
    <div>
      <h1>Previous Scans</h1>
      <ScanList scans={scans} />
    </div>
  );
};

export default ScanViewer;
