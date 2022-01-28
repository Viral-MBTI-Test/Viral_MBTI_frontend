import { useEffect, useState } from 'react';
import '../css/login.css';
import boy from '../../images/boy.svg';
import kakao_login_large_wide from '../../images/kakao_login_large_wide.png';
import MbtiCube from './mbtiCube';
import vector from '../../images/vector.svg';
import webClient from '../../share/webClient';
import axios, { AxiosResponse } from 'axios';
const { Kakao } = window;
const loginWithKaKao = () => {
  Kakao.Auth.authorize({
    redirectUri: 'https://mbtigen.es/auth',
  });
};

const Login = () => {
  const countParticipants = async () => {
    const participants: AxiosResponse = await axios.get(
      'https://mbti-test.duckdns.org/participants/'
    );
    setCount(participants.data.number_of_users);
  };
  useEffect(() => {
    countParticipants();
  }, []);
  const [count, setCount] = useState<number>(0);
  return (
    <div className="login_container">
      <div className="login_view">
        {/*<img className="vectorImg" src={vector} />*/}

        <div className="login_mainTitle">
          <div>나는 정말</div>
          <div className="login_mbti">
            <MbtiCube index={0} />
            <MbtiCube index={1} />
            <MbtiCube index={2} />
            <MbtiCube index={3} />가 맞을까?
          </div>
        </div>
        <div className="login_subTitle">
          나와 같은 유형의 사람들은 정말 나와 비슷할까???
          <br />
          나랑 같은 MBTI를 가진 사람들은 어떤 생각을 가지고
          <br />
          있는지 확인해봐요.
        </div>
        <div className="boyImg">
          <img src={boy} alt="boy"></img>
        </div>
        <div className="login_countMsg">{`지금까지 ${count}명이 참여했어요`}</div>
        <div style={{ zIndex: '1000' }}>
          <img
            src={kakao_login_large_wide}
            alt="kakao login"
            className="kakao"
            onClick={() => {
              loginWithKaKao();
            }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Login;
