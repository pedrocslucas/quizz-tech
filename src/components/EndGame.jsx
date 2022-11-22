import React from "react";
import { useContext} from "react";
import { QuizContext } from "../context/quiz";

import Navbar from "./Navbar";
import Footer from "./Footer";

function EndGame(){
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <>
            <Navbar/>
            <div className="container text-center">
                <p className="text-score">
                    Sua Pontuação foi de: {quizState.score} / 5
                </p>
            </div>
            <div className="btn-div d-flex">
                <button className="btn-primary align-items-center justify-content-center mt-5" onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
            </div>
            <Footer/>
        </>
    )

}

export default EndGame;