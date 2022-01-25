import { Link } from 'react-router-dom';
import { similarFriendsResponse } from '../result/result';
import MBTIProfile from '../share/MBTIProfile';
import './friendsList.css';
const AllFriendsList = (props: { friendsList: similarFriendsResponse[] }) => {
  return (
    <>
      <div className="friendsList_container">
        <div className="friendsList_list">
          <div className="friendsList_text">
            전체 친구들의 성격 유형 확인하기
          </div>
          {props.friendsList.map(
            (friend: similarFriendsResponse, index: number) => {
              return (
                <MBTIProfile
                  friend_profile_image={friend.friend_profile_image}
                  friend_name={friend.friend_name}
                  friend_result={friend.friend_result}
                  similar_percent={friend.similar_percent}
                />
              );
            }
          )}
          <Link to="/friends_list" className="friendsList_btn">
            돌아가기
          </Link>
        </div>
      </div>
    </>
  );
};
export default AllFriendsList;
