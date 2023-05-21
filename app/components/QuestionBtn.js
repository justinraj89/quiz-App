import { Questions } from "../helpers/Questions";

function QuestionBtn({option, optionChosen, currentQuestion, answerChosen}) {
  return (
    <button
      className={`p-2 hover:text-green-500 w-fit self-center ${
        optionChosen === option ? "text-green-500" : "text-white"
      }`}
      onClick={() => answerChosen(option)}
    >
      {option}: {Questions[currentQuestion][`option${option}`]}
    </button>
  );
}

export default QuestionBtn;
