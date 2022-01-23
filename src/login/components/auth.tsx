import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios, { AxiosInstance } from 'axios';

const Auth = () => {
  useEffect(() => {
    GetCode();
  }, []);

  const GetCode = async () => {
    let code = new URL(window.location.href).searchParams.get('code');
    await axios
      .get(`http://34.64.75.45:8000/signin/?code=${code}`)
      .then((response) => {
        localStorage.setItem('access', response.data.access);
        localStorage.setItem('refresh', response.data.refresh);
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
export default Auth;
