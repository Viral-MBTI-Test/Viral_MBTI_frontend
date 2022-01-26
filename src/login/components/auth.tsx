import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios, { AxiosInstance } from 'axios';
import Loading from '../../Loading';

const Auth = () => {
  useEffect(() => {
    GetCode();
  }, []);

  const GetCode = async () => {
    let code = new URL(window.location.href).searchParams.get('code');
    await axios
      .get(`http://mbti-test.duckdns.org/signin/?code=${code}`)
      .then((response) => {
        localStorage.setItem('access', response.data.access);
        localStorage.setItem('refresh', response.data.refresh);
        window.location.href = 'http://localhost:3000/setinfo';
      })
      .catch((e) => console.log(e));
  };
  return <Loading type={'login'}></Loading>;
};
export default Auth;
