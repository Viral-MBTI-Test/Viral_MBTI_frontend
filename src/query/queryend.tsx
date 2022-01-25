import "./query.css";
import { useNavigate } from "react-router-dom";
import { Querylist } from "./querylist";
import { useState } from "react";
import "./queryend.css";
import MBTIPercent from "../share/MBTIPercent";
import MBTIProfile from "../share/MBTIProfile";
import boy from "../images/boy.svg";

const QueryEnd = () => {
    const ans = [
        { rank: "1위", text: "INTP", percent: "33%" },
        { rank: "2위", text: "INTJ", percent: "21%" },
        { rank: "3위", text: "ENTJ", percent: "11%" },
        { rank: "6위", text: "ENTP", percent: "7%" },
    ];

    const navigate = useNavigate();
    const [currentNo, setCurrentNo] = useState(0);

    const afterClick = () => {
        if (currentNo === Querylist.length - 1) {
            navigate("/result");
        } else {
            setCurrentNo((currentNo) => currentNo + 1);
        }
    };

    const beforeClick = () => {
        if (currentNo === 0) {
            navigate("/result");
        }
        setCurrentNo((currentNo) => currentNo - 1);
    };

    const mbtiRender = ans.map((option) => {
        return <MBTIPercent index={0} mbti="ESFJ" percent={50} />;
    });
    /* 나랑같은 mbti
  const mineRender = ans.map((option) => {
    return (
      <div className="queryend_result">
        <div className="queryend_rank">{option.rank}</div>
        <div className="queryend_text">{option.text}</div>
        <div className="queryend_percent">{option.percent}</div>
      </div>
    );
  });
*/
    return (
        <div className="queryend_container">
            <div className="progress_div"></div>

            <div className="queryend_question">
                {Querylist[currentNo].question}
            </div>

            <div className="query_selected"> 선택한 답안 </div>
            <div className="queryend_mbti"> 나와 같은 답을 선택한 MBTI </div>

            {mbtiRender}

            <div className="queryend_mbti"> ENTP들은 이런 담을 골랐어요 </div>

            {/*mineRender*/}
            <MBTIPercent index={0} mbti="ESFJ" percent={50} />
            <MBTIPercent index={1} mbti="ESFJ" percent={50} />
            <MBTIPercent index={2} mbti="ESFJ" percent={50} />
            <MBTIPercent index={3} mbti="ESFJ" percent={50} />

            <div className="queryend_mbti"> 나랑 같은 답을 선택한 친구들 </div>

            <div>
                <MBTIProfile friend_profile_image={boy} friend_name="김진형" />
                <MBTIProfile friend_profile_image={boy} friend_name="김진형" />
                <MBTIProfile friend_profile_image={boy} friend_name="김진형" />
            </div>

            <div className="query_prevBtn" onClick={beforeClick}>
                이전 문항
            </div>
            <div className="queryend_nextBtn" onClick={afterClick}>
                다음 문항
            </div>
        </div>
    );
};

export default QueryEnd;
