import { useState } from 'react';
import '../share/MBTIPercent.css';

const MBTIRanks = (mbtiPercentProps: {
  index: number;
  mbti: string;
  percent: number;
  backgroundColor: string;
  color: string;
}) => {
  return (
    <>
      <div
        className="MBTIPercent_box"
        style={{
          backgroundColor: `${mbtiPercentProps.backgroundColor}`,
          color: `${mbtiPercentProps.color}`,
        }}
      >
        <span>{mbtiPercentProps.index + 1}위</span>
        <span style={{ marginLeft: '10px' }}>{mbtiPercentProps.mbti}</span>
        <span
          style={{
            float: 'right',
            flexGrow: 1,
            textAlign: 'end',
          }}
        >
          {Math.floor(mbtiPercentProps.percent)}%
        </span>
      </div>
    </>
  );
};
export default MBTIRanks;
