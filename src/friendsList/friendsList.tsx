import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MBTIProfile from "../share/MBTIProfile";
import webClient from "../share/webClient";
import "./friendsList.css";
import question from "../images/questionMark.png";
import { similarFriendsResponse } from "../result/result";
import MBTIRanks from "./mbtiRanks";

export interface ranksProps {
  mbti: string;
  percent: number;
  rank: number;
}
const initValue: similarFriendsResponse = {
  friend_id: undefined,
  friend_name: "",
  friend_profile_image: undefined,
  friend_result: undefined,
  similar_percent: undefined,
};
const FriendsList = (props: {
  profile: string;
  userName: string;
  friendsList: similarFriendsResponse[];
  result: string;
  ranks: ranksProps[];
}) => {
  const [friendsList, setFriendsList] = useState<similarFriendsResponse[]>([
    initValue,
    initValue,
    initValue,
    initValue,
    initValue,
  ]);
  let flag = -1;
  const userMbti = localStorage.getItem("completeMbti");
  const [ranks, setRanks] = useState<ranksProps[]>([]);
  const getFriends = async () => {
    const response: similarFriendsResponse[] = props.friendsList;
    const friends: similarFriendsResponse[] = [...friendsList];
    response.map((response: similarFriendsResponse, index: number) => {
      friends[index] = response;
    });
    setFriendsList(friends);
  };
  const getRanks = async () => {
    const ranksList: ranksProps[] = props.ranks;

    const array: ranksProps[] = [...ranks];
    var i = 0;
    for (i = 0; i < ranksList.length; i++) {
      if (ranksList[i].mbti === userMbti) {
        if (i > 3) {
          array[3] = ranksList[i];
          array[3].rank = i;
        } else {
          array[i] = ranksList[i];
          array[i].rank = i;
        }
        flag = i;
      } else {
        if (i <= 2) {
          array[i] = ranksList[i];
          array[i].rank = i;
        } else if (i === 3 && flag >= 0) {
          array[i] = ranksList[i];
          array[i].rank = i;
          break;
        } else {
          continue;
        }
      }
    }
    setRanks(array);
  };
  useEffect(() => {
    getFriends();
    getRanks();
  }, []);
  return (
    <>
      <div className="friendsList_container">
        {props.userName === "동의하기" ? (
          <MBTIProfile
            friend_profile_image={props.profile}
            friend_name="익명"
            friend_result={props.result}
            similar_percent={undefined}
          />
        ) : (
          <MBTIProfile
            friend_profile_image={props.profile}
            friend_name={props.userName}
            friend_result={props.result}
            similar_percent={undefined}
          />
        )}
        <div className="friendsList_list">
          <div className="friendsList_text">
            내 친구들은 이런 유형이 가장 많았어요
          </div>
          {ranks.map((rank) => {
            return rank.mbti === userMbti ? (
              <MBTIRanks
                index={rank.rank}
                mbti={rank.mbti}
                percent={rank.percent}
                backgroundColor="#E8E0CE"
                color="#134030"
              />
            ) : (
              <MBTIRanks
                index={rank.rank}
                mbti={rank.mbti}
                percent={rank.percent}
                backgroundColor="#ACB4A2"
                color="#F4F2ED"
              />
            );
          })}
        </div>
        <div className="friendsList_list">
          <div className="friendsList_text">
            전체 친구들의 성격유형 확인하기
          </div>
          <div>
            {props.friendsList.length === 0 ? (
              <MBTIProfile
                friend_profile_image={undefined}
                friend_name={""}
                friend_result={undefined}
                similar_percent={undefined}
              />
            ) : (
              props.friendsList.map(
                (friend: similarFriendsResponse, index: number) => {
                  if (index >= 5 || index >= friendsList.length) return <></>;
                  else
                    return (
                      <MBTIProfile
                        friend_profile_image={friend.friend_profile_image}
                        friend_name={friend.friend_name}
                        friend_result={friend.friend_result}
                        similar_percent={friend.similar_percent}
                      />
                    );
                }
              )
            )}
          </div>
          <div className="friendsList_btn_box">
            <Link
              to="/result"
              className="friendsList_btn"
              style={{ marginRight: "9px" }}
            >
              돌아가기
            </Link>
            <Link
              to="/all_friendsList"
              className="friendsList_btn"
              style={{ marginLeft: "9px" }}
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
