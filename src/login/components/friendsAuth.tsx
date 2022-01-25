import { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios, { AxiosInstance } from 'axios';
import webClient from '../../share/webClient';

const FriendsAuth = (props: any) => {
  const navigation = useNavigate();
  useEffect(() => {
    const GetCode = async () => {
      let code = new URL(window.location.href).searchParams.get('code');
      await webClient
        .get(`friends-auth/?code=${code}`)
        .then((response) => {
          props.setUsername(response.data.username);
          props.setProfileImage(response.data.kakao_profile_img_url);
          console.log(response.data.username);
        })
        .then(() => {
          navigation('/setinfo');
        })
        .catch((e) => console.log(e));
    };
    GetCode();
  }, []);
  useEffect(() => {});
  return (
    <div>
      <Link to="/setinfo">go to setInfo</Link>
    </div>
  );
};
export default FriendsAuth;
