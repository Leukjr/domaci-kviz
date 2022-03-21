import React, { useState } from "react";
import "./App.css";
import Quiz from "./Quiz/Quiz";
import WelcomeScreen from "./WelcomeScreen/WelcomeScreen.jsx";
import quizQuestionsData from "./contexts/QuizQuestionsData";
import quizQuestions from "./constants/quizQuestions";

function App() {
  const [isQuizVisible, setIsQuizVisible] = useState(false);

  return (
    <div className="App">
      <quizQuestionsData.Provider value={{ questions: quizQuestions }}>
        {isQuizVisible ? <Quiz /> : <WelcomeScreen />}
        {isQuizVisible ? (
          <button onClick={() => setIsQuizVisible(false)}>Odustani</button>
        ) : (
          <button onClick={() => setIsQuizVisible(true)}>Start</button>
        )}
      </quizQuestionsData.Provider>
    </div>
  );
}

export default App;
