import './FriendProfile.css';
import { similarFriendsResponse } from '../result/result';
import { useState } from 'react';
import kakao_default_image from '../images/kakao_default_img.png';
const MBTIProfile = (props: similarFriendsResponse) => {
  const [profileDefaultImage, setProfileDefaultImage] = useState<string>(
    'https://i.ibb.co/km2c6Zy/Frame-44.png'
  );
  return (
    <div className="FriendProfile-container">
      <img
        src={
          props.friend_profile_image === undefined
            ? profileDefaultImage
            : props.friend_profile_image === ''
            ? kakao_default_image
            : props.friend_profile_image
        }
        alt="profile"
        style={{
          width: '40px',
          height: '40px',
          //backgroundColor: 'black',
          borderRadius: '15px',
        }}
      />
      {props.friend_result === undefined ? (
        <span style={{ marginLeft: '8px', fontSize: '12px', color: '#13402F' }}>
          나와 같은 답을 선택한 친구가 없어요!
        </span>
      ) : (
        <>
          <div className="MBTIProfile_profileText">
            <span style={{ color: '#13402F' }}>{props.friend_name}</span>
            <p style={{ color: '#1F513F' }}>{props.friend_result}</p>
          </div>
          <div className="MBTIProfile_friendProfilePercent">
            <span style={{ marginRight: '17px', color: '#1F513F' }}>
              {props.similar_percent
                ? `${Math.floor(props.similar_percent)}%`
                : ''}
            </span>
          </div>
        </>
      )}
    </div>
  );
};
export default MBTIProfile;
