"use client";
import { useState, useContext, useEffect } from "react";
import { QuizContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";
//================================

function Quiz() {
  const { score, setScore, setQuizState } = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");


  const answerChosen = (ans) => {
    setOptionChosen(ans)
  }

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setQuizState("results");
  };

  return (
    <div className="font-mono">
      <div className="mt-12">
        <h1 className="font-bold text-2xl text-blue-900">
          {Questions[currentQuestion].question}
        </h1>
      </div>

      <div className="flex flex-col mt-12 mb-12">

        <button className="p-2 focus:text-red-400" onClick={() => answerChosen("A")}>
          {Questions[currentQuestion].optionA}
        </button>


        <button className="p-2 focus:text-red-400" onClick={() => answerChosen("B")}>
          {Questions[currentQuestion].optionB}
        </button>
        <button className="p-2 focus:text-red-400" onClick={() => answerChosen("C")}>
          {Questions[currentQuestion].optionC}
        </button>
        <button className="p-2 focus:text-red-400" onClick={() => answerChosen("D")}>
          {Questions[currentQuestion].optionD}
        </button>
      </div>
      {currentQuestion === Questions.length - 1 ? (
        <div className="flex justify-center">
          <button
            className="w-48 text-black font-bold border-2 p-2 border-black"
            onClick={finishQuiz}
          >
            Finish Quiz
          </button>
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            className="w-48 text-black font-bold border-2 p-2 border-black"
            onClick={nextQuestion}
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;


// `p-2 bg-red-400${selected && selectedStyle}`
