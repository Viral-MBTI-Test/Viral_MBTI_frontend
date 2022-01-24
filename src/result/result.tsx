
import React, { useState } from 'react';
import './result.css';
import boy from '../images/boy.svg';
import { Link } from 'react-router-dom';
import MBTIProfile from '../share/MBTIProfile';
import MBTIPercent from '../share/MBTIPercent';

interface personalityResultProps {
  frequency: string;
  result: string[];
}

const Result = () => {

  return (
    <div className="result_container">
      <span
        style={{
          color: '#1F513F',
          fontWeight: 'bold',
          fontSize: '20px',
          marginTop: '36px',
          marginBottom: '16px',
        }}
      >
        당신은...ENTP에 INTJ 한스푼
      </span>
      <MBTIPercent mbti="INFJ" percent={77} index={0} />
      <MBTIPercent mbti="ESFJ" percent={35} index={1} />
      <MBTIPercent mbti="INFJ" percent={7} index={2} />
      <p>
        테스트 결과는 참여자가 많아질수록 더 정확해져요!
        <br /> 다음에 또 확인해보세요.😏
      </p>
      <div className="result_rectangle_big_container">
        <div className="result_title_small">나는 이런 성격을 갖고 있어요</div>
        <RectangleResult
          frequency="often"
          result={[
            '밖에 놀러가는 것도 좋지만, 집에서 쉬는 것도 좋아해요 좋아좋아 좋아해~~',
            '2',
            '밖에 놀러가는 것도 좋지만, 집에서 쉬는 것도 좋아해요 좋아좋아 좋아해~~',
            '2',
            '밖에 놀러가는 것도 좋지만, 집에서 쉬는 것도 좋아해요 좋아좋아 좋아해~~',
            '2',
          ]}
        />
      </div>
      <div className="result_rectangle_big_container">
        <div className="result_title_small">가끔은...</div>
        <RectangleResult
          frequency="sometimes"
          result={['내 의견과 상대 의견이 다르면 설득하려는 스타일이에요', '2']}
        />
      </div>
      <div className="result_myFriendsContainer">
        <span>나와 비슷한 성향의 친구들</span>
        <div style={{ height: '20px' }} />
        <MBTIProfile img={boy} userName="김진형" />
        <MBTIProfile img={boy} userName="김진형" />
        <MBTIProfile img={boy} userName="김진형" />
      </div>
      <div className="result_buttonContainer">
        <Link to="/friends_list" className="result_button">
          전체 친구목록
        </Link>
        <Link to ="/queryend" style={{ textDecoration: 'none' }}>
                <div className="result_button">질문별 결과 보기</div> </Link>
      </div>
      <div className="result_shareContainer">
        <span>결과 공유하기</span>
        <div className="result_shareIcons">
          <img
            src={boy}
            alt="boy"
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'black',
              borderRadius: '15px',
            }}
          />
          <img
            src={boy}
            alt="boy"
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'black',
              borderRadius: '15px',
            }}
          />
          <img
            src={boy}
            alt="boy"
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'black',
              borderRadius: '15px',
            }}
          />
          <img
            src={boy}
            alt="boy"
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'black',
              borderRadius: '15px',
            }}
          />

        </div>
      </div>
    </div>
  );
};

export const SimilarFriends = () => {
  return (
    <div className="result_friendProfile">
      <img
        src={boy}
        alt="boy"
        style={{
          width: '40px',
          height: '40px',
          backgroundColor: 'black',
          borderRadius: '15px',
        }}
      />
      <div className="result_profileText">
        <span>김진형</span>
        <p>ENTP에 INTJ 한스푼</p>
      </div>
      <div className="result_friendProfilePercent">
        <span>55%</span>
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
              props.frequency === 'often' ? `📍 ${result}` : `✅ ${result}`
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
