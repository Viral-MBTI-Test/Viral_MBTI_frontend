import "./MBTIProfile.css";

const MBTIProfile = (props: any) => {

  return (
    <div className="MBTIProfile_Profile">
      <img
        src={props.img}
        alt="profile"
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "black",
          borderRadius: "15px",
        }}
      />
      <div className="MBTIProfile_profileText">
        <span>{props.userName}</span>
        <p>{props.friendResult}</p>
      </div>
      <div className="MBTIProfile_friendProfilePercent">
        <span>{props.percent}%</span>
      </div>
    </div>
  );

};
export default MBTIProfile;
