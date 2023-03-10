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

  const prevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setQuizState("results");
  };

  return (
    <div className="font-mono px-8">
      <div className="mt-12">
        <h1 className="font-bold text-2xl lg:text-4xl text-blue-900 text-center">
          {Questions[currentQuestion].question}
        </h1>
      </div>

      <div className="flex flex-col mt-12 mb-12 text-xl lg:text-2xl text-white">

        <button className="p-2 hover:text-gray-300 focus:text-red-400 w-fit self-center" onClick={() => answerChosen("A")}>
          A: {Questions[currentQuestion].optionA}
        </button>

        <button className="p-2 hover:text-gray-300 focus:text-red-400 w-fit self-center" onClick={() => answerChosen("B")}>
          B: {Questions[currentQuestion].optionB}
        </button>
        <button className="p-2 hover:text-gray-300 focus:text-red-400 w-fit self-center" onClick={() => answerChosen("C")}>
          C: {Questions[currentQuestion].optionC}
        </button>
        <button className="p-2 hover:text-gray-300 focus:text-red-400 w-fit self-center" onClick={() => answerChosen("D")}>
          D: {Questions[currentQuestion].optionD}
        </button>
      </div>


      {currentQuestion === Questions.length - 1 ? (
        <div className="flex justify-center">
          <button
            className="lg:w-48 text-white font-bold border-2 p-2 border-white"
            onClick={finishQuiz}
          >
            Finish Quiz
          </button>
          
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            className="lg:w-48 text-white font-bold border-2 p-2 border-white"
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
