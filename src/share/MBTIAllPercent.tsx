import { useState } from "react";
import { brotliDecompress } from "zlib";
import "./MBTIPercent.css";

const MBTIAllPercent = (mbtiPercentProps: {
  index: number;
  mbti: string;
  percent: number;
  myIndex: number;
}) => {
  return (
    <>
      {mbtiPercentProps.percent === 0 ? (
        <></>
      ) : (
        <div
          className="MBTIPercent_box"
          style={{
            backgroundColor:
              mbtiPercentProps.myIndex === mbtiPercentProps.index
                ? "#E8E0CE"
                : "#ACB4A2",
          }}
        >
          <div
            style={{
              color:
                mbtiPercentProps.myIndex === mbtiPercentProps.index
                  ? "#1f513f"
                  : "#f4f2ed",
            }}
          >
            {mbtiPercentProps.index + 1}위
          </div>
          <span
            style={{
              color:
                mbtiPercentProps.myIndex === mbtiPercentProps.index
                  ? "#1f513f"
                  : "#f4f2ed",
              marginLeft: "20px",
            }}
          >
            {mbtiPercentProps.mbti}
          </span>
          <span
            style={{
              color:
                mbtiPercentProps.myIndex === mbtiPercentProps.index
                  ? "#1f513f"
                  : "#f4f2ed",
              float: "right",
              flexGrow: 1,
              textAlign: "end",
            }}
          >
            {Math.floor(mbtiPercentProps.percent)}점
          </span>
        </div>
      )}
    </>
  );
};
export default MBTIAllPercent;
