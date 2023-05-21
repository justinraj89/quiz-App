"use client";
import { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
//==================================================

function MainMenu() {
  const { quizState, setQuizState } = useContext(QuizContext);

  return (
    <div className="flex flex-col h-screen items-center pt-28">
      <h1 className="font-bold text-4xl lg:text-4xl font-mono tracking-widest text-white text-center">
        React Quiz
      </h1>
      <div className="flex justify-center mb-10 mt-10">
        <img src="/batman.gif" alt="logo" className="w-60 lg:w-80 rounded-sm" />
      </div>

      <div className="flex justify-center">
        <button
          className="w-48 font-bold p-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
          onClick={() => setQuizState("quiz")}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default MainMenu;
