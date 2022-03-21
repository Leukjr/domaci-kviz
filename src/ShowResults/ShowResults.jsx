import React from "react";

const ShowResults = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div>
      <div>{correctAnswer} correct answer/s</div>
      <div>{wrongAnswer} wrong answer/s</div>
    </div>
  );
};

export default ShowResults;
