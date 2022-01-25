import { useEffect, useState } from 'react';

//axios
import { AxiosResponse } from 'axios';
import webClient from './share/webClient';
//router
import { RouteProps, Route, useNavigate, Outlet } from 'react-router-dom';
import Auth from './login/components/auth';

const ProtectedRoute = ({ ...routeProps }: RouteProps) => {
  const [isAuth, setIsAuth] = useState<boolean | undefined>(undefined);
  const navigate = useNavigate();
  const check = async () => {
    const access = localStorage.getItem('access');
    const refresh = localStorage.getItem('refresh');

    if (!access) setIsAuth(false);
    else {
      try {
        webClient.get('/participants/');
        setIsAuth(true);
      } catch (error) {
        console.log('error');
        try {
          let response: AxiosResponse = await webClient.post('/refresh/', {
            refresh: refresh,
          });
          localStorage.setItem('access', response.data.access);
          setIsAuth(true);
        } catch (error) {
          setIsAuth(false);
        }
      }
    }
  };

  useEffect(() => {
    check();
  }, []);

  if (isAuth === undefined) return <Outlet />;
  else if (isAuth === false) {
    navigate('/');
    return <Outlet />;
  } else return <Outlet />;
};

export default ProtectedRoute;
