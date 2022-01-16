import React from "react";
import "./setInfo.css";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

const SetInfo = () => {
    return (
        <div className="setInfo_containerWithPadding">
            <div className="setInfo_container">
                <div className="setInfo_boldTitle">
                    카카오톡 프로필 연동하기
                </div>
                <div className="setInfo_profile">
                    <img
                        src={logo}
                        alt="profile_img"
                        className="setInfo_profileImg"
                    />
                    <span className="setInfo_name">이진형</span>
                </div>
                <div className="setInfo_explain">
                    익명으로 참여하면 뭐 할 수 없고 어쩌구
                </div>
                <div className="setInfo_SetAnonymous">
                    <input type="checkbox" className="setInfo_checkBox" />
                    익명으로 참여하기
                </div>
                <div
                    className="setInfo_boldTitle"
                    style={{ marginTop: "32px", marginBottom: "0px" }}
                >
                    MBTI 입력하기
                </div>
                <div className="setInfo_explain">
                    익명으로 참여하면 뭐 할 수 없고 어쩌구
                </div>
                <div className="setInfo_boxContainer">
                    <Link to="/question/0">
                        <button className="setInfo_startButton">
                            검사 시작하기
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default SetInfo;
