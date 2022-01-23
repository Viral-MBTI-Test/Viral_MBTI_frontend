import './query.css';
import { Link } from 'react-router-dom';
import { Querylist } from './querylist';
import React, {useState} from "react";

const Query = () => {
  
  const [currentNo, setCurrentNo] = useState(0);

  const handleClick = () => {
    setCurrentNo(currentNo + 1);
  };

  return (
    <div className="query_container">
      <div className="progress_div"></div>

      <div className="query_question">
        {Querylist[currentNo].question}
      </div>

      <div >
        {Querylist[currentNo].ans.map((answer) => (
            <div className="query_answer"
                onClick={handleClick}
            > {answer.text} </div> 
        ))}
      </div>
     
      <Link to="./queryend" style={{ textDecoration: 'none' }}>
        <div className="query_prevBtn">이전 질문</div>
      </Link>
    </div>
  );
};

export default Query;