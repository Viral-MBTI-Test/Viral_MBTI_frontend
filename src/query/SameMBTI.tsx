import './SameAnswer.css';

const MBTIAnswer = (mbtiPercentProps: {
  index: number;
  content: string;
  percent: number;
}) => {
  return (
    <div>
      <div
        className={
          'MBTIAnswer_box ' +
          (mbtiPercentProps.index === 0 ? 'top-answer' : 'another-answer')
        }
        style={{
          background: getBackgroundRange(
            mbtiPercentProps.index,
            mbtiPercentProps.percent,
            mbtiPercentProps.percent,
            100 - mbtiPercentProps.percent
          ),
        }}
      >
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

const getBackgroundRange = (
  index: number,
  percent: number,
  front: number,
  back: number
) => {
  let frontColor = '#C0C6B8';
  let backColor = '#ACB4A2';

  if (index === 0) {
    frontColor = '#CDD1C7';
    backColor = '#E8E0CE';
  }

  if (front > back) {
    return `linear-gradient(90deg, ${frontColor} ${percent}%, ${backColor} ${
      100 - percent
    }%)`;
  } else {
    return `linear-gradient(to left, ${backColor} ${
      100 - percent
    }%, ${frontColor} ${percent}%)`;
  }
};

export default MBTIAnswer;
