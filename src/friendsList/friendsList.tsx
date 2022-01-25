import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MBTIPercent from '../share/MBTIPercent';
import MBTIProfile from '../share/MBTIProfile';
import webClient from '../share/webClient';
import './friendsList.css';
import question from '../images/questionMark.png';
import { similarFriendsResponse } from '../result/result';

const initValue: similarFriendsResponse = {
  friend_id: undefined,
  friend_name: '',
  friend_profile_image: undefined,
  friend_result: undefined,
  similar_percent: undefined,
};
const FriendsList = (props: {
  profile: string;
  userName: string;
  friendsList: similarFriendsResponse[];
}) => {
  const [friendsList, setFriendsList] = useState<similarFriendsResponse[]>([
    initValue,
    initValue,
    initValue,
    initValue,
    initValue,
  ]);
  const getFriends = async () => {
    const response: similarFriendsResponse[] = props.friendsList;
    const friends: similarFriendsResponse[] = [...friendsList];
    response.map((response: similarFriendsResponse, index: number) => {
      friends[index] = response;
    });
    setFriendsList(friends);
  };
  const getRanks = async () => {
    const ranks: AxiosResponse = await webClient.get('/mbti-rank/');
    console.log(ranks);
  };
  useEffect(() => {
    getFriends();
    getRanks();
  }, []);
  return (
    <>
      <div className="friendsList_container">
        {/*<MBTIProfile img={props.profile} userName={props.userName} />*/}
        <div className="friendsList_list">
          <div className="friendsList_text">
            내 친구들은 이런 유형이 가장 많았어요
          </div>
          <MBTIPercent index={0} mbti="ESFJ" percent={50} />
          <MBTIPercent index={1} mbti="ESFJ" percent={50} />
          <MBTIPercent index={2} mbti="ESFJ" percent={50} />
          <MBTIPercent index={3} mbti="ESFJ" percent={50} />
        </div>
        <div className="friendsList_list">
          <div className="friendsList_text">
            전체 친구들의 성격유형 확인하기
          </div>
          <MBTIProfile
            friend_profile_image={friendsList[0].friend_profile_image}
            friend_name={friendsList[0].friend_name}
            friend_result={friendsList[0].friend_result}
            similar_percent={friendsList[0].similar_percent}
          />
          <MBTIProfile
            friend_profile_image={friendsList[1].friend_profile_image}
            friend_name={friendsList[1].friend_name}
            friend_result={friendsList[1].friend_result}
            similar_percent={friendsList[1].similar_percent}
          />
          <MBTIProfile
            friend_profile_image={friendsList[2].friend_profile_image}
            friend_name={friendsList[2].friend_name}
            friend_result={friendsList[2].friend_result}
            similar_percent={friendsList[2].similar_percent}
          />
          <MBTIProfile
            friend_profile_image={friendsList[3].friend_profile_image}
            friend_name={friendsList[3].friend_name}
            friend_result={friendsList[3].friend_result}
            similar_percent={friendsList[3].similar_percent}
          />
          <MBTIProfile
            friend_profile_image={friendsList[4].friend_profile_image}
            friend_name={friendsList[4].friend_name}
            friend_result={friendsList[4].friend_result}
            similar_percent={friendsList[4].similar_percent}
          />
          <div className="friendsList_btn_box">
            <Link
              to="/result"
              className="friendsList_btn"
              style={{ marginRight: '9px' }}
            >
              돌아가기
            </Link>
            <Link
              to="/all_friendsList"
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
