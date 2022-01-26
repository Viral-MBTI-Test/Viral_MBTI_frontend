import { useState } from 'react';
import './MBTIPercent.css';

const MBTIPercent = (mbtiPercentProps: {
  index: number;
  mbti: string;
  percent: number;
}) => {
  const [color, setColor] = useState<string[]>([
    '#e8e0ce',
    '#9aa48e',
    '#b3bbaa',
  ]);
  return (
    <>
      {mbtiPercentProps.percent === 0 ? (
        <></>
      ) : (
        <div
          className="MBTIPercent_box"
          style={{
            backgroundColor: `${color[mbtiPercentProps.index]}`,
            height: mbtiPercentProps.index === 0 ? '28px' : '20px',
          }}
        >
          <span
            style={{
              color: mbtiPercentProps.index % 3 === 0 ? '#1f513f' : '#f4f2ed',
            }}
          >
            {mbtiPercentProps.index + 1}위
          </span>
          <span
            style={{
              color: mbtiPercentProps.index % 3 === 0 ? '#1f513f' : '#f4f2ed',
              marginLeft: '20px',
            }}
          >
            {mbtiPercentProps.mbti}
          </span>
          <span
            style={{
              color: mbtiPercentProps.index % 3 === 0 ? '#1f513f' : '#f4f2ed',
              float: 'right',
              flexGrow: 1,
              textAlign: 'end',
            }}
          >
            {mbtiPercentProps.percent?.toFixed(1)}점
          </span>
        </div>
      )}
    </>
  );
};
export default MBTIPercent;
