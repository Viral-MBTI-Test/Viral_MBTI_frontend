import "./query.css";
import { useNavigate } from "react-router-dom";
import { Querylist } from "./querylist";
import { useEffect, useState } from "react";
import webClient from "../share/webClient";
import { ReactComponent as Boy } from "../images/run_boy.svg";

const Query = () => {
  const navigate = useNavigate();
  const [currentNo, setCurrentNo] = useState(0);
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState([
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  ]);

  const delay = (ms: any) => {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
  };

  const answerClick = async (selectedAnswer: number) => {
    if (currentNo === Querylist.length - 1) {
      let result = answer.map((a, i) => {
        return { question_number: i + 1, choice_number: a };
      });
      result[currentNo].choice_number = selectedAnswer;
      await webClient.post("/answer/", result);

      navigate("/result");
    } else {
      setShow(true);

      let tmpAnswer = [...answer];
      tmpAnswer[currentNo] = selectedAnswer;
      setAnswer(tmpAnswer);
      setCurrentNo(currentNo + 1);
    }
  };

  const beforeClick = () => {
    if (currentNo - 1 === 0 || currentNo === 0) {
      setShow(false);
    }
    setCurrentNo(currentNo - 1);
  };

  useEffect(() => {
    console.log(currentNo);
  }, [currentNo]);

  return (
    <div className="query_container">
      <div className="progress-div" style={{ width: "296px" }}>
        <div style={{ width: `${currentNo * 10}%` }} className="progress">
          <Boy className="progress-boy" />
        </div>
      </div>

      <div className="query_question">{Querylist[currentNo].question}</div>

      <div>
        {Querylist[currentNo].ans.map((answer, index) => (
          <div
            className="query_answer"
            onClick={() => {
              "background-color: #e8e0ce";
              "color: #1f513f";
              delay(500);
              answerClick(index + 1);
            }}
          >
            {answer.text}
          </div>
        ))}
      </div>

      {show && (
        <div>
          <div className="query_prevBtn" onClick={beforeClick}>
            {" "}
            이전 질문{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default Query;
