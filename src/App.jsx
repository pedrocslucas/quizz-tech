import { useContext} from "react";
import { QuizContext } from "./context/quiz";

import Home from "./components/Home";
import Formulario from "./components/Formulario";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      {quizState.gameStage === "Home" && <Formulario/>}
      {quizState.gameStage === "Quiz" && <Home/>}
    </div>
  );
}

export default App;