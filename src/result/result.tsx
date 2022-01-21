import React, { useState } from "react";
import "./result.css";

const Result = () => {
    return (
        <div className="result_container">
            <span
                style={{
                    color: "#1F513F",
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginTop: "36px",
                }}
            >
                당신은...ENTP에 INTJ 한스푼
            </span>
            <RectangleSmall mbti="INFJ" percent={77} index={0} />
            <RectangleSmall mbti="ESFJ" percent={35} index={1} />
            <RectangleSmall mbti="INFJ" percent={7} index={2} />
            <p>
                테스트 결과는 참여자가 많아질수록 더 정확해져요!
                <br /> 다음에 또 확인해보세요.😏
            </p>
            <div className="result_rectangle_big_container">
                <div className="result_title_small">
                    나는 이런 성격을 갖고 있어요
                </div>
                <div className="result_rectangle_result_box">
                    <div className="result_personality_text">
                        📍 밖에 놀러가는 것도 좋지만, 집에서 쉬는 것도 좋아해요
                        좋아좋아 좋아해~~
                    </div>
                    <div className="result_personality_text">
                        📍 밖에 놀러가는 것도 좋지만, 집에서 쉬는 것도 좋아해요
                        좋아좋아 좋아해~~
                    </div>
                    <div className="result_personality_text">
                        📍 밖에 놀러가는 것도 좋지만, 집에서 쉬는 것도 좋아해요
                        좋아좋아 좋아해~~
                    </div>
                </div>
            </div>
            <div className="result_rectangle_big_container">
                <div className="result_title_small">가끔은...</div>
                <div className="result_rectangle_result_box">
                    <div className="result_personality_text">
                        ✅ 내 의견과 상대 의견이 다르면 설득하려는 스타일이에요
                    </div>
                    <div className="result_personality_text">
                        ✅ 내 의견과 상대 의견이 다르면 설득하려는 스타일이에요
                    </div>
                    <div className="result_personality_text">
                        ✅ 내 의견과 상대 의견이 다르면 설득하려는 스타일이에요
                    </div>
                </div>
            </div>
        </div>
    );
};

const RectangleSmall = (mbtiPercentProps: {
    index: number;
    mbti: string;
    percent: number;
}) => {
    const [color, setColor] = useState<string[]>([
        "#e8e0ce",
        "#9aa48e",
        "#b3bbaa",
    ]);
    return (
        <div
            className="result_rectangle_small"
            style={{
                backgroundColor: `${color[mbtiPercentProps.index]}`,
                marginTop: mbtiPercentProps.index === 0 ? "16px" : "0px",
            }}
        >
            <span
                style={{
                    color:
                        mbtiPercentProps.index % 3 === 0
                            ? "#1f513f"
                            : "#f4f2ed",
                }}
            >
                {mbtiPercentProps.mbti}
            </span>
            <span
                style={{
                    color:
                        mbtiPercentProps.index % 3 === 0
                            ? "#1f513f"
                            : "#f4f2ed",
                }}
            >
                {mbtiPercentProps.percent}%
            </span>
        </div>
    );
};

export default Result;
