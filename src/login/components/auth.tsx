import { useEffect } from 'react';

const Auth = () => {
  useEffect(() => {
    getCode();
  }, []);
  const getCode = async () => {
    let code = new URL(window.location.href).searchParams.get('code');
    console.log(code);
    //axios로 post해주고
  };
  return <div>auth</div>;
};
export default Auth;
