import React from 'react';
import './setInfo.css';
import user_empty from '../images/user_empty.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
const { Kakao } = window;
const authForGetFriendsList = () => {
  Kakao.Auth.authorize({
    redirectUri: 'http://localhost:3000/friendsAuth',
    scope: 'friends',
  });
};

// const getFriends = () => {
//   useEffect(() => {}, []);
// };

// const getMbti = () => {
//   const []
// }

const SetInfo = () => {
  return (
    <div className="setInfo_containerWithPadding">
      <div className="setInfo_container">
        <div className="setInfo_boldTitle">카카오톡 프로필 연동하기</div>
        <button
          className="setInfo_profile"
          onClick={() => authForGetFriendsList()}
        >
          <img
            src={user_empty}
            alt="profile_img"
            className="setInfo_profileImg"
          />
          <span className="setInfo_name">동의하기</span>
        </button>
        <div className="setInfo_explain">
          내 친구들의 MBTI 알아보기 등 서비스를 완전하게 즐기기
          <br />
          위해서는 선택 항목 동의가 필요해요.
          <br />위 프로필 버튼을 눌러 동의를 진행해주세요.
        </div>
        <div
          className="setInfo_boldTitle"
          style={{ marginTop: '0px', marginBottom: '0px' }}
        >
          MBTI 입력하기
        </div>
        <div
          className="setInfo_explain"
          style={{ marginTop: '0px', marginBottom: '0px', height: '18px' }}
        >
          내 MBTI 유형을 순서대로 선택해주세요.
        </div>
        <div className="setInfo_selectContainer" style={{ marginTop: '46px' }}>
          <button
            className="setInfo_selectButton"
            style={{ marginLeft: '24px' }}
          >
            E
          </button>
          <div className="setInfo_emptySelect"></div>
          <button className="setInfo_selectButton">I</button>
        </div>
        <div className="setInfo_selectContainer">
          <button
            className="setInfo_selectButton"
            style={{ marginLeft: '24px' }}
          >
            S
          </button>
          <div className="setInfo_emptySelect"></div>
          <button className="setInfo_selectButton">N</button>
        </div>
        <div className="setInfo_selectContainer">
          <button
            className="setInfo_selectButton"
            style={{ marginLeft: '24px' }}
          >
            T
          </button>
          <div className="setInfo_emptySelect"></div>
          <button className="setInfo_selectButton">F</button>
        </div>
        <div className="setInfo_selectContainer">
          <button
            className="setInfo_selectButton"
            style={{ marginLeft: '24px' }}
          >
            J
          </button>
          <div className="setInfo_emptySelect"></div>
          <button className="setInfo_selectButton">P</button>
        </div>

        <div className="setInfo_boxContainer">
          <Link to="/question/0">
            <button
              className="setInfo_startButton"
              style={{ textDecoration: 'inherit' }}
            >
              검사 시작하기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SetInfo;
