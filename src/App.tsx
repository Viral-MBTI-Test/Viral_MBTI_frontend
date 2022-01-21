import Login from './login/components/login';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Query from './query/query';
import Queryend from './query/queryend';
import SetInfo from './setInfo/setInfo';
import Result from './result/result';
import Auth from './login/components/auth';
import FriendsAuth from './login/components/friendsAuth';
import { useState } from 'react';
import user_empty from '../images/user_empty.svg';

function App() {
  const [username, setUsername] = useState<string>('동의하기');
  const [profileImage, setProfileImage] = useState<string>(
    '../images/user_empty.svg'
  );

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/friendsAuth"
            element={
              <FriendsAuth
                setUsername={setUsername}
                setProfileImage={setProfileImage}
              />
            }
          />
          <Route
            path="/setinfo"
            element={
              <SetInfo username={username} profileImage={profileImage} />
            }
          />
          <Route path="/question/0" element={<Query />} />
          <Route path="/question/0/queryend" element={<Queryend />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
