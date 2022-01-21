import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios, { AxiosInstance } from 'axios';
import webClient from '../../utils/webClient';

const FriendsAuth = () => {
  useEffect(() => {
    GetCode();
  }, []);

  const GetCode = async () => {
    let code = new URL(window.location.href).searchParams.get('code');
    await webClient
      .get(`friends-auth/?code=${code}`)
      .then((response) => {
        window.location.href = 'http://localhost:3000/setinfo';
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <Link to="/setinfo">go to setInfo</Link>
    </div>
  );
};
export default FriendsAuth;
