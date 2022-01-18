import React, { useState } from "react";
import "./result.css";

const Result = () => {
    return (
        <div className="result_container">
            <div className="result_rectangle_big">
                당신은...ENTP에 INTJ 한스푼
            </div>
            <RectangleSmall mbti="INFJ" percent={77} index={0} />
            <RectangleSmall mbti="ESFJ" percent={35} index={1} />
            <RectangleSmall mbti="INFJ" percent={7} index={2} />
            당신은 무슨 성격이에요~~~ 텍스트 들어갈수도
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
                marginTop: mbtiPercentProps.index === 0 ? "44px" : "0px",
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
