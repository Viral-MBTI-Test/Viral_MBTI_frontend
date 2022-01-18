import { useEffect, useState } from 'react';
import '../css/cube.css';

interface MbtiCubeProps {
  index: number;
}
const MbtiCube = (props: MbtiCubeProps) => {
  const mbti: { [key: number]: string[] } = {
    0: ['E', 'I'],
    1: ['S', 'N'],
    2: ['F', 'T'],
    3: ['J', 'P'],
  };
  console.log(typeof props.index);
  return (
    <div className="scene">
      <div className={`cube index${props.index}`}>
        <div className="cubeFace cubeFaceFront">{mbti[props.index][0]}</div>
        <div className={`cubeFace cubeFaceBottom index${props.index}`}>
          {mbti[props.index][1]}
        </div>
      </div>
    </div>
  );
};
export default MbtiCube;
