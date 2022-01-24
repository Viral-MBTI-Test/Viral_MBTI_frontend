import './query.css';
import {useNavigate} from 'react-router-dom';
import { Querylist } from './querylist';
import {useState} from "react";
/*import webClient from '../../share/webClient';
import { AxiosResponse } from 'axios';
*/
const Query = () => {

  const navigate = useNavigate();
  const [currentNo, setCurrentNo] = useState(0);

  const answerClick = () => {
    if (currentNo === Querylist.length - 1) {
      navigate("/result");
    } else {
      setCurrentNo((currentNo) => currentNo + 1);
    }
  };

  const beforeClick = () => {
    if(currentNo === 0){
      alert("첫질문 -> 예외처리")
    }
    setCurrentNo((currentNo) => currentNo - 1);
  }

  return (
    <div className="query_container">
      <div className="progress_div"></div>

      <div className="query_question">
        {Querylist[currentNo].question}
      </div>

      <div >
        {Querylist[currentNo].ans.map((answer) => (
            <div className="query_answer" onClick={answerClick}> {answer.text} </div> 
        ))}
      </div>
     
      <div className="query_prevBtn" onClick={beforeClick}>이전 질문</div>
     
    </div>
  );
};

export default Query;