import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

function Footer() {
  const [quizState, dispatch] = useContext(QuizContext);

  function nextQuestion() {
    dispatch({ type: "CHANGE_QUESTION" });
  }

  return (
    <>
      <div className="foot-bar  ">
        <div className="container ">
          <div className="row justify-content-center">
            {quizState.answerSelected && (
              <div className="footer-bef col-sm-6">
                <button
                  className="footer-btn mt-4"
                  onClick={() => nextQuestion()}
                >
                  Próxima
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;