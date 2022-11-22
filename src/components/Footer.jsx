import React from "react";
import { useContext} from "react";
import { QuizContext } from "../context/quiz";

function Footer() {

  const [quizState, dispatch] = useContext(QuizContext);

  function nextQuestion(pg_staus) {
    dispatch({type: "CHANGE_QUESTION"});

    pg_staus.style.width += 24;
  }

  return (
    <>
      <div className="foot-bar">
        <div className="container">
          <div className="row justify-content-md-between align-items-center">
            <div className="navbar ">
              <div className="progress mt-4">
                <div className="progress-status"  style={{width: 24}}></div>
              </div>
              {quizState.answerSelected && (
                <div className="btn-div ">
                  <button className="footer-btn mt-3" onClick={() => nextQuestion()}>Próxima</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;