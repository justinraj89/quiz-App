"use client";
import { useState } from "react";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import ResultsScreen from "./components/ResultsScreen";
import { QuizContext } from "./helpers/Contexts";
//=======================================================

export default function Home() {
  const [quizState, setQuizState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
      <QuizContext.Provider value={{ quizState, setQuizState, score, setScore }}>
        {quizState === "menu" && <MainMenu />}
        {quizState === "quiz" && <Quiz />}
        {quizState === "results" && <ResultsScreen />}
      </QuizContext.Provider>
  );
}
