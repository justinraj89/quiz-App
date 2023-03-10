import { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";
//=================================================

function ResultsScreen() {
  const { score, setScore, setQuizState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setQuizState("menu");
  };

  return (
    <div>
      <h1>Quiz Results</h1>
      <h3>
        {score} / {Questions.length}
      </h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default ResultsScreen;
