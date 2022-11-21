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
              <Option option={option} 
              key={option} 
              answer={currentQuestion.answer} 
              selectOption={() => onSelectOption(option)}/>
            ))}
          </form>
          {!quizState.answerSelected && !quizState.help && (
            <>
              {currentQuestion.tip && (
                <button className="btn-primary-tip" onClick={() => dispatch({type: "SHOW_TIP"})}>Dica</button>
              )}
            </>
          )}
        </div>
        {!quizState.answerSelected && quizState.help === "tip" && (
          <p>{currentQuestion.tip}</p>
        )}
      </div>
    </>
  );
}

export default Question;