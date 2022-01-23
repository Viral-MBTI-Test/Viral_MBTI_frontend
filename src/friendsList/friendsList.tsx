import { Link } from 'react-router-dom';
import MBTIPercent from '../share/MBTIPercent';
import MBTIProfile from '../share/MBTIProfile';
import './friendsList.css';
const FriendsList = (props: { profile: string; userName: string }) => {
  return (
    <>
      <div className="friendsList_fullView">
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
            <MBTIProfile img={props.profile} userName={props.userName} />
            <MBTIProfile img={props.profile} userName={props.userName} />
            <MBTIProfile img={props.profile} userName={props.userName} />
            <MBTIProfile img={props.profile} userName={props.userName} />
            <MBTIProfile img={props.profile} userName={props.userName} />
            <Link to="all_friendsList" className="friendsList_btn">
              전체 친구목록
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default FriendsList;
