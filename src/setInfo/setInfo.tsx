import React from 'react';
import './setInfo.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

//images
import '../images/E.svg';
import '../images/I.svg';
import '../images/S.svg';
import '../images/N.svg';
import '../images/T.svg';
import '../images/F.svg';
import '../images/P.svg';
import '../images/J.svg';

const { Kakao } = window;
const authForGetFriendsList = () => {
  Kakao.Auth.authorize({
    redirectUri: 'http://localhost:3000/friendsAuth',
    scope: 'friends',
  });
};

const SetInfo = (props: any) => {
  const username = props.username;
  const profileImage = props.profileImage;
  const [mbti1, setMbti1] = useState('');
  const [mbti2, setMbti2] = useState('');
  const [mbti3, setMbti3] = useState('');
  const [mbti4, setMbti4] = useState('');
  const completeMbti = mbti1 + mbti2 + mbti3 + mbti4;

  // const [addMBTI, setAddMBTI] = useState([
  //   {
  //     id: 1,
  //     mbti: '',
  //   },
  //   {
  //     id: 2,
  //     mbti: '',
  //   },
  //   {
  //     id: 3,
  //     mbti: '',
  //   },
  //   {
  //     id: 4,
  //     mbti: '',
  //   },
  // ]);

  // const updateFieldChanged = index => e => {
  //   console.log('index: ' + index);
  //   console.log('property name: '+ e.target.name);
  //   let newArr = [...addMBTI];
  //   newArr[index] = e.target.value;

  //   setAddMBTI(newArr);
  // }

  return (
    <div className="setInfo_containerWithPadding">
      <div className="setInfo_container">
        <div className="setInfo_boldTitle">카카오톡 프로필 연동하기</div>
        <button
          className="setInfo_profile"
          onClick={() => authForGetFriendsList()}
        >
          <img
            src={profileImage}
            alt="profile_img"
            className="setInfo_profileImg"
          />
          <span className="setInfo_name">{username}</span>
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
            onClick={() => setMbti1('E')}
            className="setInfo_selectButton"
            style={{ marginLeft: '24px' }}
          >
            E
          </button>
          <div className="setInfo_emptySelect">{mbti1}</div>
          <button
            onClick={() => setMbti1('I')}
            className="setInfo_selectButton"
          >
            I
          </button>
        </div>
        <div className="setInfo_selectContainer">
          <button
            onClick={() => setMbti2('S')}
            className="setInfo_selectButton"
            style={{ marginLeft: '24px' }}
          >
            S
          </button>
          <div className="setInfo_emptySelect">{mbti2}</div>
          <button
            onClick={() => setMbti2('N')}
            className="setInfo_selectButton"
          >
            N
          </button>
        </div>
        <div className="setInfo_selectContainer">
          <button
            onClick={() => setMbti3('T')}
            className="setInfo_selectButton"
            style={{ marginLeft: '24px' }}
          >
            T
          </button>
          <div className="setInfo_emptySelect">{mbti3}</div>
          <button
            onClick={() => setMbti3('F')}
            className="setInfo_selectButton"
          >
            F
          </button>
        </div>
        <div className="setInfo_selectContainer">
          <button
            onClick={() => setMbti4('J')}
            className="setInfo_selectButton"
            style={{ marginLeft: '24px' }}
          >
            J
          </button>
          <div className="setInfo_emptySelect">{mbti4}</div>
          <button
            onClick={() => setMbti4('P')}
            className="setInfo_selectButton"
          >
            P
          </button>
        </div>

        <div className="setInfo_boxContainer">
          <div>{completeMbti}</div>
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
