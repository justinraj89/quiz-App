"use client";
import { useState, useContext, useEffect } from "react";
import { QuizContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";
import QuestionBtn from "./QuestionBtn";
//================================

function Quiz() {
  const { score, setScore, setQuizState } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");


  const answerChosen = (ans) => {
    setOptionChosen(ans);
  };

  const nextQuestion = () => {
    setOptionChosen("");
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
    <div className="font-mono px-8">
      <div className="flex justify-center">
      <h1 className="font-bold text-2xl lg:text-3xl text-green-200 text-center mt-28 max-w-xl">
          {Questions[currentQuestion].question}
        </h1>
      </div>

      <div className="flex flex-col mt-12 mb-12 text-xl lg:text-2xl ">
       <QuestionBtn option="A" optionChosen={optionChosen} currentQuestion={currentQuestion} answerChosen={answerChosen}/>
       <QuestionBtn option="B" optionChosen={optionChosen} currentQuestion={currentQuestion} answerChosen={answerChosen}/>
       <QuestionBtn option="C" optionChosen={optionChosen} currentQuestion={currentQuestion} answerChosen={answerChosen}/>
       <QuestionBtn option="D" optionChosen={optionChosen} currentQuestion={currentQuestion} answerChosen={answerChosen}/>
      </div>

      {currentQuestion === Questions.length - 1 ? (
        <div className="flex justify-center">
          <button
            className="w-48 font-bold p-2 text-white bg-emerald-600 rounded-lg hover:bg-emerald-700"
            onClick={finishQuiz}
          >
            Finish Quiz
          </button>
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            className="w-48 font-bold p-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
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


