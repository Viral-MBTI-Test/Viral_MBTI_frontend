import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Auth = () => {
  useEffect(() => {
    getCode();
  }, []);
  const getCode = async () => {
    let code = new URL(window.location.href).searchParams.get('code');
    console.log(code);
    //axios로 post해주고 token 받아오기
  };
  return <div><Link to="/setinfo">go to setInfo</Link></div>;
};
export default Auth;
