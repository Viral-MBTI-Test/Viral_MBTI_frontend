import Login from './login/components/login';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Query from './query/query';
import Queryend from './query/queryend';
import SetInfo from './setInfo/setInfo';
import Result, { similarFriendsResponse } from './result/result';
import Auth from './login/components/auth';
import FriendsAuth from './login/components/friendsAuth';
import { useEffect, useState } from 'react';
import FriendsList from './friendsList/friendsList';
import ProtectedRoute from './ProtectedRoutes';
import AllFriendsList from './friendsList/allFriendsList';
import Loading from './Loading';
import webClient from './share/webClient';
import { AxiosResponse } from 'axios';

function App() {
  const [username, setUsername] = useState<string>('동의하기');
  const [profileImage, setProfileImage] = useState<string>(
    'https://i.ibb.co/km2c6Zy/Frame-44.png'
  );
  const [friendsList, setFriendsList] = useState<similarFriendsResponse[]>([
    {
      friend_id: 0,
      friend_name: '아직 검사를 진행한 친구가 없어요!',
      friend_profile_image: '',
      friend_result: '',
      similar_percent: 0,
    },
  ]);
  const getSimilarFriends = async () => {
    try {
      console.log('hello');
      const result: AxiosResponse = await webClient.get('/similar-friends/');
      setFriendsList(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSimilarFriends();
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/loading" element={<Loading type="login" />} />
          <Route element={<ProtectedRoute />}>
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
            <Route path="/queryend" element={<Queryend />} />
            <Route
              path="/result"
              element={<Result friendsList={friendsList[0]} />}
            />
            <Route
              path="/friends_list"
              element={
                <FriendsList
                  profile={profileImage}
                  userName={username}
                  friendsList={friendsList}
                />
              }
            />
            <Route
              path="/all_friendsList"
              element={<AllFriendsList friendsList={friendsList} />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
