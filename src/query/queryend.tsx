import "./query.css";
import { useNavigate } from "react-router-dom";
import { Querylist } from "./querylist";
import { useEffect, useState } from "react";
import "./queryend.css";
import MBTIPercent from "../share/MBTIPercent";
import FriendProfile from "./FriendProfile";
import webClient from "../share/webClient";
import { AxiosResponse } from "axios";
import SameMBTI from "./SameMBTI";
import SameAnswer from "./SameAnswer";
import { ReactComponent as Boy } from "../images/run_boy.svg";

const QueryEnd = () => {
    const navigate = useNavigate();
    const [sameAns, setSameAns] = useState<any>([]);
    const [sameMbti, setSameMbti] = useState<any>([]);
    const [currentNo, setCurrentNo] = useState(0);
    const [friendAns, setFriendAns] = useState<any>([]);
    const [myAnswer, setMyAnswer] = useState<any>([]);
    const [myMBTI, setMyMBTI] = useState<string>("");
    const [myMbtiIndex, setMyMbtiIndex] = useState<number>(0);

    const myMbti = localStorage.getItem("completeMbti");
    myMbti?.replaceAll("", "");
    const settingMyMbtiIndex = () => {
        for (let i = 0; i < 16; i++) {
            if (sameAns[i].mbti === myMBTI) {
                setMyMbtiIndex(i);
                break;
            }
        }
    };
    useEffect(() => {
        const getAnswerStat = async () => {
            const response: any = await webClient.get(
                `/answer-statistics/?question=${currentNo + 1}`
            );
            setSameAns(response.data);
            //settingMyMbtiIndex();
        };

        const getSameMBTI = async () => {
            const response: any = await webClient.get(
                `/question-statistics/?question=${currentNo + 1}`
            );
            setSameMbti(response.data);
        };

        const getFriendsAns = async () => {
            const response: any = await webClient.get(
                `/same-answer-friends/?question=${currentNo + 1}`
            );
            setFriendAns(response.data);
        };
        /*
    const getMyMbtiIndex= () =>{
      sameAns.map((friend: any, index: number) => {
              if (friend.mbti === myMbti) return (setMyMbtiIndex(index+1));
      )}
    };
  
    getMyMbtiIndex();
  */
        getAnswerStat();

        getSameMBTI();
        getFriendsAns();
        // getMyMbtiIndex();
    }, [currentNo]);

    useEffect(() => {
        const getMyAnswer = async () => {
            const response = await webClient.get(`/my-answer/`);
            setMyAnswer(response.data);
        };
        const getMyInfo = async () => {
            const response = await webClient.get("/user/");
            setMyMBTI(response.data[0].mbti);
        };
        getMyAnswer();
        getMyInfo();
    }, []);

    const afterClick = () => {
        if (currentNo === Querylist.length - 1) {
            navigate("/result");
        } else {
            setCurrentNo((currentNo) => currentNo + 1);
            window.scrollTo(0, 0);
        }
    };

    const beforeClick = () => {
        setCurrentNo((currentNo) => currentNo - 1);
        window.scrollTo(0, 0);
    };

    return (
        <div className="queryend_container">
            <div className="progress-div-end" style={{ width: "296px" }}>
                <div
                    style={{ width: `${currentNo * 10}%` }}
                    className="progress"
                >
                    <Boy className="progress-boy" /> : <></>
                </div>
            </div>

            <div className="queryend_question">
                {Querylist[currentNo].question}
            </div>

            <div className="queryend_selected">
                {myAnswer[currentNo]?.choice_text}
            </div>

            <div className="queryend_mbti"> 나와 같은 답을 선택한 MBTI </div>

            <div>
                {myMbtiIndex < 4 ? (
                    <div>
                        <SameAnswer
                            index={0}
                            mbti={sameAns[0]?.mbti}
                            percent={sameAns[0]?.percent}
                            myIndex={myMbtiIndex}
                        />
                        <SameAnswer
                            index={1}
                            mbti={sameAns[1]?.mbti}
                            percent={sameAns[1]?.percent}
                            myIndex={myMbtiIndex}
                        />
                        <SameAnswer
                            index={2}
                            mbti={sameAns[2]?.mbti}
                            percent={sameAns[2]?.percent}
                            myIndex={myMbtiIndex}
                        />
                        <SameAnswer
                            index={3}
                            mbti={sameAns[3]?.mbti}
                            percent={sameAns[3]?.percent}
                            myIndex={myMbtiIndex}
                        />
                    </div>
                ) : (
                    <div>
                        <SameAnswer
                            index={0}
                            mbti={sameAns[0]?.mbti}
                            percent={sameAns[0]?.percent}
                            myIndex={myMbtiIndex}
                        />
                        <SameAnswer
                            index={1}
                            mbti={sameAns[1]?.mbti}
                            percent={sameAns[1]?.percent}
                            myIndex={myMbtiIndex}
                        />
                        <SameAnswer
                            index={2}
                            mbti={sameAns[2]?.mbti}
                            percent={sameAns[2]?.percent}
                            myIndex={myMbtiIndex}
                        />
                        <SameAnswer
                            index={myMbtiIndex}
                            mbti={sameAns[myMbtiIndex]?.mbti}
                            percent={sameAns[myMbtiIndex]?.percent}
                            myIndex={myMbtiIndex}
                        />
                    </div>
                )}
            </div>

            <div className="queryend_mbti">
                {" "}
                {myMBTI}들은 이런 담을 골랐어요{" "}
            </div>

            <SameMBTI
                index={0}
                content={sameMbti[0]?.content}
                percent={sameMbti[0]?.percent}
            />
            <SameMBTI
                index={1}
                content={sameMbti[1]?.content}
                percent={sameMbti[1]?.percent}
            />
            <SameMBTI
                index={2}
                content={sameMbti[2]?.content}
                percent={sameMbti[2]?.percent}
            />
            <SameMBTI
                index={3}
                content={sameMbti[3]?.content}
                percent={sameMbti[3]?.percent}
            />
            <div className="queryend_mbti"> 나랑 같은 답을 선택한 친구들 </div>

            <div>
                {friendAns.length === 0 ? (
                    <FriendProfile
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
                                <FriendProfile
                                    friend_profile_image={
                                        friend?.friend_profile_image
                                    }
                                    friend_result={friend?.friend_result}
                                    similar_percent={friend?.percent}
                                    friend_name={friend?.friend_name}
                                    key={index}
                                />
                            );
                    })
                )}
            </div>

            <div className="query-buttons">
                <div className="queryend-btn" onClick={afterClick}>
                    {currentNo < 9 ? "다음 문항" : "돌아가기"}
                </div>
                {currentNo > 0 ? (
                    <div className="queryend-btn" onClick={beforeClick}>
                        이전 문항
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default QueryEnd;
