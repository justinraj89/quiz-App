"use client";
import { useState, useContext, useEffect } from "react";
import { QuizContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";
import QuestionBtn from "./QuestionBtn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//================================

function Quiz() {
  const { score, setScore, setQuizState } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const answerChosen = (ans) => {
    setOptionChosen(ans);
  };

  const nextQuestion = () => {
    if (optionChosen === "") {
      toast.error("You must select an answer to proceed to the next question", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
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
      <h2 className="text-white text-center mt-11 lg:mt-28 text-xl">Question {currentQuestion + 1} / {Questions.length}</h2>
      <div className="flex justify-center">
        <h1 className="font-bold text-2xl lg:text-3xl text-green-200 text-center mt-10 max-w-xl">
          {Questions[currentQuestion].question}
        </h1>
      </div>

      <div className="flex flex-col mt-12 mb-12 text-xl lg:text-2xl ">
        <QuestionBtn
          option="A"
          optionChosen={optionChosen}
          currentQuestion={currentQuestion}
          answerChosen={answerChosen}
        />
        <QuestionBtn
          option="B"
          optionChosen={optionChosen}
          currentQuestion={currentQuestion}
          answerChosen={answerChosen}
        />
        <QuestionBtn
          option="C"
          optionChosen={optionChosen}
          currentQuestion={currentQuestion}
          answerChosen={answerChosen}
        />
        <QuestionBtn
          option="D"
          optionChosen={optionChosen}
          currentQuestion={currentQuestion}
          answerChosen={answerChosen}
        />
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
      <ToastContainer />
    </div>
  );
}

export default Quiz;
