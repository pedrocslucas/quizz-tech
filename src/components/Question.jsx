import React from "react";
import { useContext} from "react";
import { QuizContext } from "../context/quiz";
import Option from "./Option";

function Question() {

  const [quizState, dispatch] = useContext(QuizContext); 

  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option},
    })
  }

  return (
    <>
      <div className="container">
        <div className="questions form-group text-center col-md-6 offset-md-3">
          <span className="h4">
            {currentQuestion.question}
          </span>
          <form>
            {currentQuestion.options.map((option) => (
              <Option option={option} key={option} answer={currentQuestion.answer} selectOption={() => onSelectOption(option)}/>
            ))}
          </form>
        </div>
      </div>
    </>
  );
}

export default Question;