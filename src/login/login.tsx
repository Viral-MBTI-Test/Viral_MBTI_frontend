import { useEffect, useState } from 'react';
import './login.css';
import whatDoUMean from '../images/whatDoUMean.svg';
import kakaoLogin from '../images/kakaoLogin.png';
import Cube from './cube';
import { Link } from 'react-router-dom';

const { Kakao } = window;
const loginWithKaKao = () => {
  Kakao.Auth.authorize({
    redirectUri: 'http://127.0.0.1:8000/accounts/kakao/login/callback/',
  });
};

const Login = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="login_container">
      <Link to="/question/0">Go to Questions</Link>

      <div className="login_mainTitle">
        나는 정말&nbsp;
        <span className="login_mbti">
          {' '}
          <Cube />
        </span>
        가 맞을까?🤔
      </div>
      <div className="login_subTitle">
        나와 같은 유형의 사람들은 정말 나와 비슷할까?
        <br />
        자신의 mbti와 같은 사람들과 자신의 답변이 얼마나 일치하는지 확인해봐요.
        <br />
        나에게 가까운 mbti는 과연 무엇일까요?
      </div>
      <div style={{ marginTop: '30px' }}>
        <img src={whatDoUMean} alt="Characters"></img>
      </div>
      <div className="login_countMsg">{`${count}명이 참여했어요`}</div>
      <div>
        <img
          src={kakaoLogin}
          alt="kakao login"
          className="kakao"
          onClick={() => {
            loginWithKaKao();
          }}
        ></img>
      </div>
    </div>
  );
};

export default Login;
