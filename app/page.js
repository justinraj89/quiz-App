"use client";
import { useState } from "react";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import ResultsScreen from "./components/ResultsScreen";
import { QuizContext } from "./helpers/Contexts";

export default function Home() {
  const [quizState, setQuizState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold mt-10 text-4xl lg:text-6xl text-white font-mono tracking-widest">
        Quiz
      </h1>

      <QuizContext.Provider
        value={{ quizState, setQuizState, score, setScore }}
      >
        {quizState === "menu" && <MainMenu />}
        {quizState === "quiz" && <Quiz />}
        {quizState === "results" && <ResultsScreen />}
      </QuizContext.Provider>
    </div>
  );
}
