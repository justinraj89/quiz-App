import { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";

//=================================================

function ResultsScreen() {
  const { score, setScore, setQuizState } = useContext(QuizContext);
  console.log(score)
  const restartQuiz = () => {
    setScore(0);
    setQuizState("menu");
  };

  return (
    <div className="mt-12 font-mono">
      <h1 className="text-3xl text-center text-white">Quiz Results</h1>
      <h3 className="text-xl text-center mt-2 text-green-200">
        You got {score} / {Questions.length} questions right.
      </h3>
      <div className="flex justify-center mt-8">
        <button className="w-48 font-bold border-2 p-2 border-white" onClick={restartQuiz}>Restart Quiz</button>
      </div>
      
    </div>
  );
}

export default ResultsScreen;
