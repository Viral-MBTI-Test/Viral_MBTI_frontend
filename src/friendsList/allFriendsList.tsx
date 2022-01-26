import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { similarFriendsResponse } from '../result/result';
import MBTIProfile from '../share/MBTIProfile';
import webClient from '../share/webClient';
import './friendsList.css';
const AllFriendsList = () => {
  const [friendsList, setFriendsList] = useState<similarFriendsResponse[]>([]);
  const getAllFriends = async () => {
    const response: AxiosResponse = await webClient.get('/similar-friends/');
    const array: similarFriendsResponse[] = [...response.data];
    response.data.map((friend: similarFriendsResponse, index: number) => {
      array[index] = friend;
    });
    setFriendsList(array);
  };
  useEffect(() => {
    getAllFriends();
  }, []);
  return (
    <>
      <div className="friendsList_container">
        <div className="friendsList_list">
          <div className="friendsList_text">
            전체 친구들의 성격 유형 확인하기
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
              )
            )}
          </div>

          <Link to="/friends_list" className="friendsList_btn">
            돌아가기
          </Link>
        </div>
      </div>
    </>
  );
};
export default AllFriendsList;
