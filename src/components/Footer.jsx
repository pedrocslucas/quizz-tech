import React from "react";
import { useContext} from "react";
import { QuizContext } from "../context/quiz";

function Footer() {

  const [quizState, dispatch] = useContext(QuizContext); 

  return (
    <>
      <div className="foot-bar">
        <div className="container">
          <div className="row justify-content-md-between align-items-center">
            <div className="navbar ">
              <div className="progress mt-4">
                <div className="progress-status " ></div>
              </div>
              {quizState.answerSelected && (
                <div className="btn-div ">
                  <button className="footer-btn mt-3" onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Próxima</button>
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