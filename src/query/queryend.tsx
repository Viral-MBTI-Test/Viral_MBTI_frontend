import "./query.css";
import { useNavigate } from "react-router-dom";
import { Querylist } from "./querylist";
import { useEffect, useState } from "react";
import "./queryend.css";
import MBTIPercent from "../share/MBTIPercent";
import MBTIProfile from "../share/MBTIProfile";
import boy from "../images/boy.svg";
import webClient from "../share/webClient";
import { AxiosResponse } from "axios";
import MBTIAnswer from "../share/MBTIAnswer";

const QueryEnd = () => {
    const navigate = useNavigate();
    const [sameAns, setSameAns] = useState<any>([]);
    const [sameMbti, setSameMbti] = useState<any>([]);
    const [currentNo, setCurrentNo] = useState(0);
    const [friendAns, setFriendAns] = useState<any>([]);

    useEffect(() => {
        const getAnswerStat = async () => {
            const response: any = await webClient.get(
                `/answer-statistics/?question=${currentNo + 1}`
            );

            const response_mbti: any = await webClient.get(
                `/question-statistics/?question=${currentNo + 1}`
            );

            const response_friend: any = await webClient.get(
                `/same-answer-friends/?question=${currentNo + 1}`
            );

            setSameAns(response.data);
            setSameMbti(response_mbti.data);
            setFriendAns(response_friend.data);
        };
        getAnswerStat();
    }, [currentNo]);

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

    return (
        <div className="queryend_container">
            <div className="progress_div"></div>

            <div className="queryend_question">
                {Querylist[currentNo].question}
            </div>

            <div className="query_selected"> 선택한 답안 </div>
            <div className="queryend_mbti"> 나와 같은 답을 선택한 MBTI </div>

            <MBTIPercent
                index={0}
                mbti={sameAns[0]?.mbti}
                percent={sameAns[0]?.percent}
            />
            <MBTIPercent
                index={1}
                mbti={sameAns[1]?.mbti}
                percent={sameAns[1]?.percent}
            />
            <MBTIPercent
                index={2}
                mbti={sameAns[2]?.mbti}
                percent={sameAns[2]?.percent}
            />
            <MBTIPercent
                index={3}
                mbti={sameAns[3]?.mbti}
                percent={sameAns[3]?.percent}
            />

            <div className="queryend_mbti"> ENTP들은 이런 담을 골랐어요 </div>

            <MBTIAnswer
                index={0}
                content={sameMbti[0]?.content}
                percent={sameMbti[0]?.percent}
            />
            <MBTIAnswer
                index={1}
                content={sameMbti[1]?.content}
                percent={sameMbti[1]?.percent}
            />
            <MBTIAnswer
                index={2}
                content={sameMbti[2]?.content}
                percent={sameMbti[2]?.percent}
            />
            <MBTIAnswer
                index={3}
                content={sameMbti[3]?.content}
                percent={sameMbti[3]?.percent}
            />

            <div className="queryend_mbti"> 나랑 같은 답을 선택한 친구들 </div>

            <div>
                <MBTIProfile
                    friend_profile_image={friendAns[0]?.friend_profile_image}
                    friend_result={friendAns[0]?.friend_result}
                    similar_percent={friendAns[0]?.percent}
                    friend_name={friendAns[0]?.friend_name}
                />
                <MBTIProfile
                    friend_profile_image={friendAns[1]?.friend_profile_image}
                    friend_result={friendAns[1]?.friend_result}
                    similar_percent={friendAns[1]?.percent}
                    friend_name={friendAns[1]?.friend_name}
                />
                <MBTIProfile
                    friend_profile_image={friendAns[2]?.friend_profile_image}
                    friend_result={friendAns[2]?.friend_result}
                    similar_percent={friendAns[2]?.percent}
                    friend_name={friendAns[2]?.friend_name}
                />
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
