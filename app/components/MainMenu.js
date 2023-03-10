"use client";
import { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
import Typewriter from "typewriter-effect";
import { BsPatchQuestion } from "react-icons/bs"
import Image from "next/image";

function MainMenu() {

  const { quizState, setQuizState } = useContext(QuizContext);


  return (
    <div className="flex flex-col px-8 h-screen">
    
      <div className="flex justify-center mb-8 mt-20">
        <img src="/thinker.png" alt="logo" className="w-60 lg:w-80 "/>
      </div>

      <div className="flex justify-center">
        <button
          className="w-48 text-white font-bold border-2 p-2 border-white hover:text-red-400"
          onClick={() => setQuizState("quiz")}
        >
          Start Quiz
        </button>
      </div>


    </div>
  );
}

export default MainMenu;
