import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Option from "./Option";

import Modal from "react-bootstrap/Modal";

import { Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  const [quizState, dispatch] = useContext(QuizContext);

  const currentQuestion = quizState.questions[quizState.currentQuestion];

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Lembre-se
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p> {currentQuestion.tip} </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Question() {
  const [modalShow, setModalShow] = React.useState(false);
  const [quizState, dispatch] = useContext(QuizContext);

  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });

  };

  



  return (
    <>
      <div className="container">
        <div className="questions form-group text-center col-md-6 offset-md-3">
          <span className="h4">{currentQuestion.question}</span>
          <form>
            {currentQuestion.options.map((option) => (
              <Option
                option={option}
                key={option}
                answer={currentQuestion.answer}
                selectOption={() => onSelectOption(option)}
              />
            ))}
          </form>
        
          {!quizState.answerSelected && !quizState.help && (
            <>
              {currentQuestion.tip && (
                <Button className="Tips" onClick={() => setModalShow(true)}>
                  Ajuda
                </Button>
              )}
              <>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Question;
