import { Link } from 'react-router-dom';
import './friendsList.css';
const AllFriendsList = () => {
  return (
    <>
      <div className="friendsList_container">
        <div className="friendsList_list">
          <div className="friendsList_text">
            전체 친구들의 성격 유형 확인하기
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
