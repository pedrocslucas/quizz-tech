import React, { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "../css/option.css";

const Option = ({ option, answer, selectOption }) => {

    const[quizState, dispatch] = useContext(QuizContext);

    return (
        <div>
            <input className={`btn-primary p-3 text-wrap col ${quizState.answerSelected && option === answer ? "correct": ""} ${quizState.answerSelected && option !== answer ? "wrong": ""}`} type="button" value={option} key={option} onClick={() => selectOption()}/>
        </div>
    )
}

export default Option;