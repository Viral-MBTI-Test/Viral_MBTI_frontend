import React, { useEffect, useState } from "react";
import "./result.css";
import boy from "../images/boy.svg";
import { Link } from "react-router-dom";
import MBTIProfile from "../share/MBTIProfile";
import MBTIPercent from "../share/MBTIPercent";
import webClient from "../share/webClient";
import { AxiosResponse } from "axios";

interface personalityResultProps {
    frequency: string;
    result: featureResponse[];
}
interface featureResponse {
    feature: string;
}
interface rankingResponse {
    mbti: string;
    percent: number;
}

const Result = () => {
    const [result, setResult] = useState<string>("결과가 없습니다.");
    const [strongFeatures, setStrongFeatures] = useState<featureResponse[]>([
        {
            feature: "검사를 진행해주세요!",
        },
    ]);
    const [weakFeatures, setWeakFeatures] = useState<featureResponse[]>([
        {
            feature: "검사를 진행해주세요!",
        },
    ]);
    const [ranking, setRanking] = useState<rankingResponse[]>([
        {
            mbti: "XXXX",
            percent: 0,
        },
        {
            mbti: "XXXX",
            percent: 0,
        },
        {
            mbti: "XXXX",
            percent: 0,
        },
    ]);
    const [profileImg, setProfileImg] = useState<string>(
        "https://i.ibb.co/km2c6Zy/Frame-44.png"
    );
    const getResult = async () => {
        try {
            const totalResult: AxiosResponse = await webClient.get(
                "/total-statistics/"
            );
            setResult(totalResult.data.result.result);
            setStrongFeatures(totalResult.data.result.features.strong);
            setWeakFeatures(totalResult.data.result.features.weak);
            setRanking(totalResult.data.mbti_ranking);
            console.log(ranking);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getResult();
    }, []);
    return (
        <div className="result_container">
            <span
                style={{
                    color: "#1F513F",
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginTop: "36px",
                    marginBottom: "16px",
                }}
            >
                {result}
            </span>
            <MBTIPercent
                mbti={ranking![0].mbti}
                percent={ranking![0].percent}
                index={0}
            />
            <MBTIPercent
                mbti={ranking![1].mbti}
                percent={ranking![1].percent}
                index={1}
            />
            <MBTIPercent
                mbti={ranking![2].mbti}
                percent={ranking![2].percent}
                index={2}
            />
            <p>
                테스트 결과는 참여자가 많아질수록 더 정확해져요!
                <br /> 다음에 또 확인해보세요.😏
            </p>
            {strongFeatures.length === 0 ? null : (
                <div className="result_rectangle_big_container">
                    <div className="result_title_small">
                        나는 이런 성격을 갖고 있어요
                    </div>
                    <RectangleResult
                        frequency="often"
                        result={strongFeatures!}
                    />
                </div>
            )}
            {weakFeatures.length === 0 ? null : (
                <div className="result_rectangle_big_container">
                    <div className="result_title_small">가끔은...</div>
                    <RectangleResult
                        frequency="sometimes"
                        result={weakFeatures!}
                    />
                </div>
            )}
            <div className="result_myFriendsContainer">
                <span>나와 비슷한 성향의 친구들</span>
                <div style={{ height: "20px" }} />
                <MBTIProfile img={profileImg} userName="김진형" />
                <MBTIProfile img={profileImg} userName="김진형" />
                <MBTIProfile img={profileImg} userName="김진형" />
            </div>
            <div className="result_buttonContainer">
                <Link to="/friends_list" className="result_button">
                    친구들 결과 보기
                </Link>
                <Link to="/queryend" style={{ textDecoration: "none" }}>
                    <button className="result_button">질문별 결과 보기</button>
                </Link>
            </div>
            <div className="result_shareContainer">
                <span>결과 공유하기</span>
                <div className="result_shareIcons">
                    <button className="result_button">카톡 공유하기</button>
                    <button className="result_button">링크 복사하기</button>
                </div>
            </div>
        </div>
    );
};

const RectangleResult = (props: personalityResultProps) => {
    return (
        <div className="result_rectangle_result_box">
            {props.result.map((result, index) => {
                return (
                    <ResultText
                        key={index}
                        result={
                            props.frequency === "often"
                                ? `📍 ${result.feature}`
                                : `✅ ${result.feature}`
                        }
                    />
                );
            })}
        </div>
    );
};

const ResultText = (props: { result: string }) => {
    return <div className="result_personality_text">{props.result}</div>;
};

export default Result;
