import { useEffect, useState } from 'react';
import whatDoUMean from './whatDoUMean.svg';
import kakaoLogin from './images/kakaoLogin.png';
const Login = () => {
  const [index, setIndex] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
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
  const changeMbti = (): void => {
    setTimeout(() => {
      setIndex((index + 1) % 16);
    }, 1500);
  };
  useEffect(() => {
    changeMbti();
  }, [index]);

  return (
    <div className="login_container">
      <div className="login_mainTitle">
        나는 정말&nbsp;
        <span className="login_mbti"> {`${mbti[index]}`}</span>가 맞을까?🤔
      </div>
      <div className="login_subTitle">
        나와 같은 유형의 사람들은 정말 나와 비슷할까?
        <br />
        자신의 mbti와 같은 사람들과 자신의 답변이 얼마나 일치하는지 확인해봐요.
        <br />
        나에게 가까운 mbti는 과연 무엇일까요?
      </div>
      <div style={{ marginTop: '30px' }}>
        <img src={whatDoUMean} alt="Character Image"></img>
      </div>
      <div className="login_countMsg">{`${count}명이 참여했어요`}</div>
      <div>
        <img src={kakaoLogin} alt="kakao login image" className="kakao"></img>
      </div>
    </div>
  );
};

export default Login;
