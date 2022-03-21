import React, { useContext, useState } from "react";
import quizQuestionsData from "../contexts/QuizQuestionsData";
import ShowResults from "../ShowResults/ShowResults";
import Timer from "../Timer/Timer";
import "./Quiz.css";

const Quiz = () => {
  const { questions } = useContext(quizQuestionsData);

  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);

  // Provjera rezultata
  const checkAnswer = (answerIndex, questionIndex) => {
    const answer = +document.getElementById(`answerOption${answerIndex}`).value;

    const questionAnswer = questions[questionIndex].correctAnswer;
    if (answer === questionAnswer) {
      setCorrectAnswer((prevState) => prevState + 1);
    } else {
      setWrongAnswer((prevState) => prevState + 1);
    }
  };

  return (
    <div>
      <ShowResults correctAnswer={correctAnswer} wrongAnswer={wrongAnswer} />
      <Timer />
      {Array.isArray(questions) &&
        questions.map((question, questionIndex) => {
          return (
            <div>
              <h3 key={questionIndex}>{question.questionText}</h3>
              {question.answerOptions.map((item, i) => {
                return (
                  <div>
                    <input
                      key={i}
                      type="radio"
                      name={"answer" + questionIndex}
                      id={"answerOption" + i}
                      value={i + 1}
                      onChange={() => checkAnswer(i, questionIndex)}
                    />
                    <label htmlFor={"answer" + questionIndex}>
                      {item.answerText}
                    </label>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default Quiz;
