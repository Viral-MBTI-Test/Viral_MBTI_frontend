import "./MBTIAnswer.css";

const MBTIAnswer = (mbtiPercentProps: {
  index: number;
  content: string;
  percent: number;
}) => {
  return (
    <div>
      <div
        className="MBTIAnswer_box"
        /*style={{
        backgroundColor: ,
      }}*/
      >
        <span
          style={{
            marginLeft: "16px",
          }}
        >
          {mbtiPercentProps.index + 1}위
        </span>

        <div
          style={{
            marginLeft: "20px",
          }}
        >
          {" "}
          {mbtiPercentProps.content}{" "}
        </div>
        <span
          style={{
            margin: "0 10px 0 16px",
            float: "right",
            flexGrow: 1,
            textAlign: "end",
          }}
        >
          {mbtiPercentProps.percent.toFixed(1)}%
        </span>
      </div>
    </div>
  );
};
export default MBTIAnswer;
