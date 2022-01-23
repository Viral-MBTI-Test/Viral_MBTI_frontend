import './MBTIProfile.css';

const MBTIProfile = (props: any) => {
  return (
    <div className="MBTIProfile_Profile">
      <img
        src={props.img}
        alt="profile"
        style={{
          width: '40px',
          height: '40px',
          backgroundColor: 'black',
          borderRadius: '15px',
        }}
      />
      <div className="MBTIProfile_profileText">
        <span>{props.userName}</span>
        <p>ENTP에 INTJ 한스푼</p>
      </div>
      <div className="MBTIProfile_friendProfilePercent">
        <span>55%</span>
      </div>
    </div>
  );
};
export default MBTIProfile;
