import "./query.css";
import { useNavigate } from "react-router-dom";
import { Querylist } from "./querylist";
import { useEffect, useState } from "react";
import "./queryend.css";
import MBTIPercent from "../share/MBTIPercent";
import MBTIProfile from "../share/MBTIProfile";
import webClient from "../share/webClient";
import { AxiosResponse } from "axios";
import MBTIAnswer from "../share/MBTIAnswer";
import MBTIAllPercent from "../share/MBTIAllPercent";
import { ReactComponent as Boy } from "../images/run_boy.svg";

const QueryEnd = () => {
  const navigate = useNavigate();
  const [sameAns, setSameAns] = useState<any>([]);
  const [sameMbti, setSameMbti] = useState<any>([]);
  const [currentNo, setCurrentNo] = useState(0);
  const [friendAns, setFriendAns] = useState<any>([]);
  const [myAnswer, setMyAnswer] = useState<any>([]);

  const myMbti = localStorage.getItem("completeMbti");
  myMbti?.replaceAll("", "");

  let myMbtiIndex = 0;

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
    /*
    const getMyMbtiIndex = () => {
      for (let i = 0; i < 16; i++) {
        if (sameAns[currentNo]?.mbti === myMbti) myMbtiIndex = i;
      }
    };
*/
    getAnswerStat();
    // getMyMbtiIndex();
  }, [currentNo]);

  useEffect(() => {
    const getMyAnswer = async () => {
      const response_my: any = await webClient.get(`/my-answer/`);
      setMyAnswer(response_my.data);
      console.log(myAnswer);
    };
    getMyAnswer();
  }, []);

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
      <div className="progress-div" style={{ width: "296px" }}>
        <div style={{ width: `${currentNo * 10}%` }} className="progress">
          <Boy className="progress-boy" /> : <></>
        </div>
      </div>

      <div className="queryend_question" style={{ margin: "24px 0 16px 0" }}>
        {Querylist[currentNo].question}
      </div>

      <div className="queryend_selected"> 선택한 답안 </div>
      <div className="queryend_mbti"> 나와 같은 답을 선택한 MBTI </div>

      <div>
        {myMbtiIndex < 4 ? (
          <div>
            <MBTIAllPercent
              index={0}
              mbti={sameAns[0]?.mbti}
              percent={sameAns[0]?.percent}
              myIndex={myMbtiIndex}
            />
            <MBTIAllPercent
              index={1}
              mbti={sameAns[1]?.mbti}
              percent={sameAns[1]?.percent}
              myIndex={myMbtiIndex}
            />
            <MBTIAllPercent
              index={2}
              mbti={sameAns[2]?.mbti}
              percent={sameAns[2]?.percent}
              myIndex={myMbtiIndex}
            />
            <MBTIAllPercent
              index={3}
              mbti={sameAns[3]?.mbti}
              percent={sameAns[3]?.percent}
              myIndex={myMbtiIndex}
            />
          </div>
        ) : (
          <div>
            <MBTIAllPercent
              index={0}
              mbti={sameAns[0]?.mbti}
              percent={sameAns[0]?.percent}
              myIndex={myMbtiIndex}
            />
            <MBTIAllPercent
              index={1}
              mbti={sameAns[1]?.mbti}
              percent={sameAns[1]?.percent}
              myIndex={myMbtiIndex}
            />
            <MBTIAllPercent
              index={2}
              mbti={sameAns[2]?.mbti}
              percent={sameAns[2]?.percent}
              myIndex={myMbtiIndex}
            />
            <MBTIAllPercent
              index={myMbtiIndex}
              mbti={sameAns[myMbtiIndex]?.mbti}
              percent={sameAns[myMbtiIndex]?.percent}
              myIndex={myMbtiIndex}
            />
          </div>
        )}
      </div>

      <div className="queryend_mbti"> {myMbti}들은 이런 담을 골랐어요 </div>

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
        {friendAns.length === 0 ? (
          <MBTIProfile
            friend_profile_image={undefined}
            friend_result={undefined}
            similar_percent={undefined}
            friend_name={""}
          />
        ) : (
          friendAns.map((friend: any, index: number) => {
            if (index >= 3) return <></>;
            else
              return (
                <MBTIProfile
                  friend_profile_image={friend?.friend_profile_image}
                  friend_result={friend?.friend_result}
                  similar_percent={friend?.percent}
                  friend_name={friend?.friend_name}
                  key={index}
                />
              );
          })
        )}
      </div>

      <div className="query_prevBtn" onClick={beforeClick}>
        {currentNo > 0 ? `이전 문항` : `결과창으로`}
      </div>
      <div className="queryend_nextBtn" onClick={afterClick}>
        {currentNo < 9 ? `다음 문항` : `결과창으로`}
      </div>
    </div>
  );
};

export default QueryEnd;
