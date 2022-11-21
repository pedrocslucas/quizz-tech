import { createContext, useReducer } from "react";
import questions from '../data/questions';

const STAGES = ["Home", "Quiz"]

const initialState = {
    gameStage: STAGES[0],
    questions,
    score: 0,
    currentQuestion: 0,
    answerSelected: false,
    levelSelected: false,
    help: false,
}

const quizReducer = (state, action) => {

    switch (action.type) {
        case "CHANGE_STATE": {
            return {
                ...state,
                gameStage: STAGES[1],
            };
        }

        case "CHOOSE_LEVEL": {
            if(state.levelSelected)
                return state;

            let quizQuestions = null;
            const chooseLevel = action.payload;

            state.questions.forEach((question) => {
                if(question.level === chooseLevel){
                    quizQuestions = question.questions;
                }
            });

            return {
                ...state,
                questions: quizQuestions,
                levelSelected: chooseLevel,
                gameStage: STAGES[1],
            }
        }
        
        case "START_GAME": {
            return initialState;
        }
        
        case "REODER_QUESTIONS": {
            const reorderQuestions = questions.sort(() => {
                return Math.random() -0.5;
            })
            return {
                ...state,
                questions: reorderQuestions,
            };
        }
        
        case "CHANGE_QUESTION": {
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false

            if(!state.questions[nextQuestion]){
                endGame = true;
            }

            return{
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[0] : state.gameStage,
                answerSelected: false,
                levelSelected: false,
                help: false,
            };
        }
        
        case "CHECK_ANSWER": {
            if(state.answerSelected)
                return state;

            const answer = action.payload.answer;
            const option = action.payload.option;
            let correctAnswer = 0
            
            if(answer === option)
                correctAnswer = 1;

            return{
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            }
        }
        
        case "SHOW_TIP": {
            return {
                ...state,
                help: "tip",
            };
        }
    
        default:
            break;
    }

}

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}