import React, { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Option = ({ option, answer, selectOption }) => {

    const[quizState, dispatch] = useContext(QuizContext);

    return (
        <div>
            <input className="btn-primary col" type="button" value={option} key={option} onClick={() => selectOption()}/>
        </div>
    )
}

export default Option;