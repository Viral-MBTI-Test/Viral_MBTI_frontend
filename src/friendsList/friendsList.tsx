import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MBTIProfile from '../share/MBTIProfile';
import webClient from '../share/webClient';
import './friendsList.css';
import { similarFriendsResponse } from '../result/result';
import MBTIRanks from './mbtiRanks';

export interface ranksProps {
  mbti: string;
  percent: number;
  rank: number;
}
const initValue: similarFriendsResponse = {
  friend_id: undefined,
  friend_name: '',
  friend_profile_image: undefined,
  friend_result: undefined,
  similar_percent: undefined,
};
const FriendsList = (props: { userName: string; profile: string }) => {
  const [friendsList, setFriendsList] = useState<similarFriendsResponse[]>([]);
  let flag = -1;
  const userMbti = localStorage.getItem('completeMbti');

  const [result, setResult] = useState<string>('');
  const [ranks, setRanks] = useState<ranksProps[]>([]);
  const [userName, setUserName] = useState<string>('익명');
  const [profile, setProfile] = useState<string>(props.profile);

  useEffect(() => {
    const getRanks = async () => {
      const ranksList: AxiosResponse = await webClient.get('/mbti-rank/');
      const array: ranksProps[] = [...ranks];
      var i = 0;
      for (i = 0; i < ranksList.data.length; i++) {
        if (ranksList.data[i].mbti === userMbti) {
          if (i > 3) {
            array[3] = ranksList.data[i];
            array[3].rank = i;
            break;
          } else {
            array[i] = ranksList.data[i];
            array[i].rank = i;
          }
          flag = i;
        } else {
          if (i <= 2) {
            array[i] = ranksList.data[i];
            array[i].rank = i;
          } else if (i === 3 && flag >= 0) {
            array[i] = ranksList.data[i];
            array[i].rank = i;
            break;
          } else {
            continue;
          }
        }
      }
      setRanks(array);
    };
    const getFriends = async () => {
      const response: AxiosResponse = await webClient.get('/similar-friends/');
      setFriendsList(response.data);
    };
    const getResult = async () => {
      try {
        const totalResult: AxiosResponse = await webClient.get(
          '/total-statistics/'
        );
        setResult(totalResult.data.result.result);
      } catch (error) {
        console.log(error);
      }
    };
    const getUser = async () => {
      const user: AxiosResponse = await webClient.get('/user/');
      if (user.data[0].kakao_friends_auth) {
        setUserName(user.data[0].username);
        setProfile(user.data[0].kakao_profile_img_url);
      }
    };
    getRanks();
    getFriends();
    getResult();
    getUser();
  }, []);
  return (
    <>
      <div className="friendsList_container">
        {props.userName === '익명으로 진행돼요😥' ? (
          <MBTIProfile
            friend_profile_image={profile}
            friend_name={userName}
            friend_result={result}
            similar_percent={undefined}
          />
        ) : (
          <MBTIProfile
            friend_profile_image={props.profile}
            friend_name={props.userName}
            friend_result={result}
            similar_percent={undefined}
          />
        )}
        <div className="friendsList_list">
          <div className="friendsList_text">
            내 친구들은 이런 유형이 가장 많았어요
          </div>
          {ranks.map((rank, index) => {
            return rank.mbti === userMbti ? (
              <MBTIRanks
                index={rank.rank}
                mbti={rank.mbti}
                percent={rank.percent}
                backgroundColor="#E8E0CE"
                color="#134030"
                key={index}
              />
            ) : (
              <MBTIRanks
                index={rank.rank}
                mbti={rank.mbti}
                percent={rank.percent}
                backgroundColor="#ACB4A2"
                color="#F4F2ED"
                key={index}
              />
            );
          })}
        </div>
        <div className="friendsList_list">
          <div className="friendsList_text">
            나와 비슷한 성격유형을 가진 친구들
          </div>
          <div>
            {friendsList.length === 0 ? (
              <MBTIProfile
                friend_profile_image={undefined}
                friend_name={''}
                friend_result={undefined}
                similar_percent={undefined}
              />
            ) : (
              friendsList.map(
                (friend: similarFriendsResponse, index: number) => {
                  if (index <= 4 && friend.friend_name) {
                    return (
                      <MBTIProfile
                        friend_profile_image={friend.friend_profile_image}
                        friend_name={friend.friend_name}
                        friend_result={friend.friend_result}
                        similar_percent={friend.similar_percent}
                        key={index}
                      />
                    );
                  }
                }
              )
            )}
          </div>
          <div className="friendsList_btn_box">
            <Link
              to="/result"
              className="friendsList_btn"
              style={{ marginRight: '9px' }}
            >
              돌아가기
            </Link>
            <Link
              to="/result/friends/all"
              className="friendsList_btn"
              style={{ marginLeft: '9px' }}
            >
              전체 친구목록
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default FriendsList;
