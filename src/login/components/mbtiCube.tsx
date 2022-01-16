import { useEffect, useState } from 'react';
import '../css/cube.css';

const MbtiCube = () => {
  const mbti: string[] = [
    'ESFJ',
    'ESFP',
    'ESTJ',
    'ESTP',
    'ENFJ',
    'ENFP',
    'ENTJ',
    'ENTP',
    'ISFJ',
    'ISFP',
    'ISTJ',
    'ISTP',
    'INFJ',
    'INFP',
    'INTJ',
    'INTP',
  ];
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    const timeout = setTimeout(async () => {
      setIndex(index + 1);
    }, 1050);
    return () => {
      clearTimeout(timeout);
    };
  }, [index]);
  return (
    <div className="scene">
      <div className="cube">
        <div className="cubeFace cubeFaceFront">{mbti[index % 16]}</div>
        <div className="cubeFace cubeFaceBottom">{mbti[(index + 1) % 16]}</div>
      </div>
    </div>
  );
};
export default MbtiCube;
