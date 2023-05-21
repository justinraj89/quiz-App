import { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";

//=================================================

function ResultsScreen() {
  const { score, setScore, setQuizState } = useContext(QuizContext);
  console.log(score);
  const restartQuiz = () => {
    setScore(0);
    setQuizState("menu");
  };

  return (
    <div className="mt-12 font-mono px-8">
      <h1 className="text-4xl text-center text-white">Quiz Results</h1>
      <h3 className="text-center mt-6 text-2xl text-green-200">
        You got {score} / {Questions.length} questions right.
      </h3>

      {score === Questions.length && (
        <div className="flex flex-col justify-center mb-10 mt-10 items-center">
          <img
            src="https://media.giphy.com/media/3o8doT9BL7dgtolp7O/giphy.gif"
            alt="logo"
            className="w-60 lg:w-80 rounded-sm"
          />
          <p className="text-xl text-white pt-4 text-center">You are a genius!</p>
        </div>
      )}

      {score === Questions.length - 1 && (
        <div className="flex flex-col justify-center mb-10 mt-6 items-center">
          <img
            src="https://media.giphy.com/media/Jq824R93JsLwZCaiSL/giphy.gif"
            alt="logo"
            className="w-60 lg:w-80 rounded-sm"
          />
          <p className="text-xl text-white pt-4 text-center">Almost perfection</p>
        </div>
      )}

      {score < Questions.length - 1 && score > 3 && (
        <div className="flex flex-col justify-center mb-10 mt-6 items-center">
          <img
            src="https://media.giphy.com/media/DjTVXmhRsuUKhYYolf/giphy.gif"
            alt="logo"
            className="w-60 lg:w-80 rounded-sm"
          />
          <p className="text-xl text-white pt-4 text-center">Keep Studying!</p>
        </div>
      )}

      {score <= 3 && (
        <div className="flex flex-col justify-center mb-10 mt-10 items-center">
          <img
            src="https://media.giphy.com/media/gGxSl050qQOJi/giphy.gif"
            alt="logo"
            className="w-60 lg:w-80 rounded-sm"
          />
          <p className="text-lg text-white pt-4 text-center">Yikes! You got some work to do.</p>
        </div>
      )}

      <div className="flex justify-center mt-8">
        <button
          className="w-48 font-bold p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          onClick={restartQuiz}
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
}

export default ResultsScreen;
