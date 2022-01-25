import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MBTIPercent from "../share/MBTIPercent";
import MBTIProfile from "../share/MBTIProfile";
import webClient from "../share/webClient";
import "./friendsList.css";
import question from "../images/questionMark.png";

interface FriendsType {
  friend_id: number | null;
  friend_name: string;
  friend_profile_image: string;
  friend_result: string | null;
  similar_percent: number | null;
}

const initValue: FriendsType = {
  friend_id: null,
  friend_name: '테스트를 진행한 친구가 없습니다.',
  friend_profile_image: question,
  friend_result: null,
  similar_percent: null,
};
const FriendsList = (props: { profile: string; userName: string }) => {
  const [friendsList, setFriendsList] = useState<FriendsType[]>([
    initValue,
    initValue,
    initValue,
    initValue,
    initValue,
  ]);
  const getFriends = async () => {
    const response: AxiosResponse = await webClient.get('/similar-friends/');
    const friends: FriendsType[] = [...response.data];
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
        <MBTIProfile img={props.profile} userName={props.userName} />
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
          {friendsList.map((friend) => {
            console.log(friend);
            return (
              <MBTIProfile
                img={friend.friend_profile_image}
                userName={friend.friend_name}
              />
            );
          })}

          <Link to="/all_friendsList" className="friendsList_btn">
            전체 친구목록
          </Link>
        </div>
      </div>
    </>
  );
};
export default FriendsList;
