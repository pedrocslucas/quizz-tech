import { useContext} from "react";
import { QuizContext } from "./context/quiz";

import Home from "./components/Home";
import Formulario from "./components/Formulario";
import EndGame from "./components/EndGame";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      {quizState.gameStage === "Home" && <Home/>}
      {quizState.gameStage === "Quiz" && <Formulario/>}
      {quizState.gameStage === "EndGame" && <EndGame/>}
    </div>
  );
}

export default App;