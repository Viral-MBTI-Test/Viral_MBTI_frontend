import './MBTIAnswer.css';

const MBTIAnswer = (mbtiPercentProps: {
  index: number;
  content: string;
  percent: number;
}) => {
  return (
    <div>
      <div className="MBTIAnswer_box">
        <div className="rank-div">
          <span className="rank-font">{mbtiPercentProps.index + 1}위</span>
        </div>

        <div className="content-div">{mbtiPercentProps.content}</div>
        <div className="percent-div">
          {mbtiPercentProps.percent?.toFixed(1)}%
        </div>
      </div>
    </div>
  );
};
export default MBTIAnswer;
