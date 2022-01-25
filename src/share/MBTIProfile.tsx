import './MBTIProfile.css';
import { similarFriendsResponse } from '../result/result';
import { useState } from 'react';
const MBTIProfile = (props: similarFriendsResponse) => {
  const [profileDefaultImage, setProfileDefaultImage] = useState<string>(
    'https://i.ibb.co/km2c6Zy/Frame-44.png'
  );
  return (
    <div className="MBTIProfile_Profile">
      <img
        src={
          props.friend_profile_image === undefined
            ? profileDefaultImage
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
        <span style={{ marginLeft: '8px', fontSize: '14px' }}>
          아직 검사한 친구가 없어요!
        </span>
      ) : (
        <>
          <div className="MBTIProfile_profileText">
            <span>{props.friend_name}</span>
            <p>{props.friend_result}</p>
          </div>
          <div className="MBTIProfile_friendProfilePercent">
            <span style={{ marginRight: '17px' }}>
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
