import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const PregnancyMonitoring = () => {
  return (
    <div>
      <h1>Pregnancy Monitoring</h1>
      <ProgressBar now={25} label={`${25}%`} />
      {/* Add trimester tracker, development guide, and checklist */}
    </div>
  );
};

export default PregnancyMonitoring;
