import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import Loading from '../../Loading';
import webClient from '../../share/webClient';
import getInfos from '../../share/getInfos';

const Auth = (props: {
  setFriendsList: Function;
  setResult: Function;
  setStrongFeatures: Function;
  setWeakFeatures: Function;
  setRanking: Function;
  setRanks: Function;
}) => {
  let response;
  const navigate = useNavigate();
  useEffect(() => {
    GetCode();
  }, []);
  const getResult = async () => {
    try {
      const totalResult: AxiosResponse = await webClient.get(
        '/total-statistics/'
      );
      props.setResult(totalResult.data.result.result);
      props.setStrongFeatures(totalResult.data.result.features.strong);
      props.setWeakFeatures(totalResult.data.result.features.weak);
      props.setRanking(totalResult.data.mbti_ranking);
    } catch (error) {
      console.log(error);
    }
  };
  const getRanks = async () => {
    const ranksList: AxiosResponse = await webClient.get('/mbti-rank/');
    props.setRanks(ranksList.data);
  };
  const checkUser = async () => {
    response = await webClient.get('/user/');
    console.log(response);
    if (response.data[0].is_answered) {
      getInfos(props);
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
