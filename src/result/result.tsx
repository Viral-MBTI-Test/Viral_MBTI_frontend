import React, { useEffect, useState } from 'react';
import './result.css';

//component
import MBTIProfile from '../share/MBTIProfile';
import MBTIPercent from '../share/MBTIPercent';
import FriendsList from '../friendsList/friendsList';

//util
import webClient from '../share/webClient';

//axios
import { AxiosResponse } from 'axios';

//package
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

//image
import leftQuote from '../images/quote_left.svg';
import RightQuote from '../images/quote_right.svg';

const { Kakao } = window;

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
export interface similarFriendsResponse {
  friend_id?: number | null;
  friend_name: string;
  friend_profile_image?: string | undefined;
  friend_result?: string | null;
  similar_percent?: number | null;
}
const Result = (props: { friendsList: similarFriendsResponse }) => {
  const [result, setResult] = useState<string>('결과가 없습니다.');
  const [strongFeatures, setStrongFeatures] = useState<featureResponse[]>([
    {
      feature: '검사를 진행해주세요!',
    },
  ]);
  const [weakFeatures, setWeakFeatures] = useState<featureResponse[]>([
    {
      feature: '검사를 진행해주세요!',
    },
  ]);
  const [ranking, setRanking] = useState<rankingResponse[]>([
    {
      mbti: 'XXXX',
      percent: 0,
    },
    {
      mbti: 'XXXX',
      percent: 0,
    },
    {
      mbti: 'XXXX',
      percent: 0,
    },
  ]);
  const [profileImg, setProfileImg] = useState<string>(
    'https://i.ibb.co/km2c6Zy/Frame-44.png'
  );
  const [similarFriends, setSimilarFriends] = useState<
    similarFriendsResponse[]
  >([
    {
      friend_id: 0,
      friend_name: '아직 검사를 진행한 친구가 없어요!',
      friend_profile_image: '',
      friend_result: '',
      similar_percent: 0,
    },
  ]);
  const getResult = async () => {
    try {
      const totalResult: AxiosResponse = await webClient.get(
        '/total-statistics/'
      );
      setResult(totalResult.data.result.result);
      setStrongFeatures(totalResult.data.result.features.strong);
      setWeakFeatures(totalResult.data.result.features.weak);
      setRanking(totalResult.data.mbti_ranking);
      console.log(weakFeatures);
    } catch (error) {
      console.log(error);
    }
  };
  /*const getSimilarFriends = async () => {
        try {
            const similarFriendsResult: AxiosResponse = await webClient.get(
                "/similar-friends/"
            );
            setSimilarFriends(similarFriendsResult.data);
            console.log(similarFriends);
        } catch (error) {
            console.log(error);
        }
    };*/
  const kakaoShare = () => {
    Kakao.Link.sendCustom({
      templateId: 69446,
    });
  };
  useEffect(() => {
    getResult();
    //getSimilarFriends();
  }, []);
  return (
    <div className="result_container">
      <div className="result_title_container">
        <img src={leftQuote} alt="leftQuote" id="result_quote_left" />
        <span className="result_title_text">당신은...{result}</span>
        <img src={RightQuote} alt="RightQuote" id="result_quote_right" />
      </div>
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
          <div className="result_title_small">나는 이런 성격을 갖고 있어요</div>
          <RectangleResult frequency="often" result={strongFeatures!} />
        </div>
      )}
      {weakFeatures.length === 0 ? null : (
        <div className="result_rectangle_big_container">
          <div className="result_title_small">가끔은...</div>
          <RectangleResult frequency="sometimes" result={weakFeatures!} />
        </div>
      )}
      <div className="result_myFriendsContainer">
        <span style={{ fontSize: '14px' }}>나와 비슷한 성향의 친구들</span>
        <div style={{ height: '20px' }} />
        <MBTIProfile
          friend_profile_image={props.friendsList.friend_profile_image}
          friend_name={props.friendsList.friend_name}
          friend_result={props.friendsList.friend_result}
          similar_percent={props.friendsList.similar_percent}
        />
      </div>
      <div className="result_buttonContainer">
        <Link to="/friends_list" className="result_button">
          친구들 결과 보기
        </Link>
        <Link to="/queryend" style={{ textDecoration: 'none' }}>
          <button className="result_button">질문별 결과 보기</button>
        </Link>
      </div>
      <div className="result_shareContainer">
        <span style={{ fontSize: '14px' }}>결과 공유하기</span>
        <div className="result_shareIcons">
          <button className="result_button" onClick={kakaoShare}>
            카톡 공유하기
          </button>
          <CopyToClipboard text={'zz'}>
            <button className="result_button">링크 복사하기</button>
          </CopyToClipboard>
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
              props.frequency === 'often'
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
