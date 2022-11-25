import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

function Footer() {
  const [quizState, dispatch] = useContext(QuizContext);

  function nextQuestion() {
    dispatch({ type: "CHANGE_QUESTION" });

    let status = document.getElementByiD('Progress');
    status.style.width += 20;
  }

  return (
    <>
      <div className="foot-bar">
        <div className="container">
          <div className="row justify-content-md-between align-items-center">
            <div className="navbar ">
              <div className="progress mt-4">
                <div itemID="Progress" className="progress-status"></div>
              </div>
              {quizState.answerSelected && (
                <div className="btn-div ">
                  <button
                    className="footer-btn mt-3"
                    onClick={() => nextQuestion()}
                  >
                    Próxima
                  </button>
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
