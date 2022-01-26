import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import Loading from '../../Loading';
import webClient from '../../share/webClient';
import getInfos from '../../share/getInfos';

const Auth = (props: { setUsername: Function; setProfileImage: Function }) => {
  let response;
  const navigate = useNavigate();
  useEffect(() => {
    GetCode();
  }, []);

  const checkUser = async () => {
    response = await webClient.get('/user/');
    if (response.data[0].is_answered) {
      window.localStorage.setItem('completeMbti', response.data[0].mbti);
      navigate('/result');
    } else {
    }
  };

  const GetCode = async () => {
    let code = new URL(window.location.href).searchParams.get('code');
    await axios
      .get(`https://mbti-test.duckdns.org/signin/?code=${code}`)
      .then((response) => {
        localStorage.setItem('access', response.data.access);
        localStorage.setItem('refresh', response.data.refresh);
      })
      .then(() => {
        checkUser();
      })
      .then(() => {
        navigate('/setinfo');
      })
      .catch((e) => console.log(e));
  };
  return <Loading type={'login'}></Loading>;
};
export default Auth;
