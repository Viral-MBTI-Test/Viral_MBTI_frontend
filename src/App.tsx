import Login from './login/components/login';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Query from './query/query';
import Queryend from './query/queryend';
import SetInfo from './setInfo/setInfo';
import Result, {
  featureResponse,
  rankingResponse,
  similarFriendsResponse,
} from './result/result';
import Auth from './login/components/auth';
import FriendsAuth from './login/components/friendsAuth';
import { useEffect, useState } from 'react';
import FriendsList, { ranksProps } from './friendsList/friendsList';
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
      friend_id: undefined,
      friend_name: '',
      friend_profile_image: undefined,
      friend_result: undefined,
      similar_percent: undefined,
    },
  ]);
  const [result, setResult] = useState<string>('결과가 없습니다.');
  const [strongFeatures, setStrongFeatures] = useState<featureResponse[]>([
    {
      feature: '검사를 진행해주세요!',
    },
  ]);
  const [weakFeatures, setWeakFeatures] = useState<featureResponse[]>([
    {
      feature: '검사를 진행해주세요!',
    },
  ]);
  const [ranking, setRanking] = useState<rankingResponse[]>([
    {
      mbti: 'XXXX',
      percent: 0,
    },
    {
      mbti: 'XXXX',
      percent: 0,
    },
    {
      mbti: 'XXXX',
      percent: 0,
    },
  ]);
  const [ranks, setRanks] = useState<ranksProps[]>([]);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/loading" element={<Loading type="login" />} />
          <Route element={<ProtectedRoute />}>
            <Route
              path="/auth"
              element={
                <Auth
                  setFriendsList={setFriendsList}
                  setResult={setResult}
                  setStrongFeatures={setStrongFeatures}
                  setWeakFeatures={setWeakFeatures}
                  setRanking={setRanking}
                  setRanks={setRanks}
                />
              }
            />
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
            <Route
              path="/question"
              element={
                <Query
                  setFriendsList={setFriendsList}
                  setResult={setResult}
                  setStrongFeatures={setStrongFeatures}
                  setWeakFeatures={setWeakFeatures}
                  setRanking={setRanking}
                  setRanks={setRanks}
                />
              }
            />
            <Route path="/queryend" element={<Queryend />} />
            <Route
              path="/result"
              element={
                <Result
                  friendsList={friendsList[0]}
                  result={result}
                  strongFeatures={strongFeatures}
                  weakFeatures={weakFeatures}
                  ranking={ranking}
                />
              }
            />
            <Route
              path="/friends_list"
              element={
                <FriendsList
                  profile={profileImage}
                  userName={username}
                  friendsList={friendsList}
                  result={result}
                  ranks={ranks}
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
