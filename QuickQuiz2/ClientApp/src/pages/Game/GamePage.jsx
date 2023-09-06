// Logic imports
import React, { useContext, useEffect, useState } from "react";
// Context import
import { AppContext } from "../../context/AppContext";

function GamePage() {
  // Get the context variables
  const { allQuestions, difficulty } = useContext(AppContext);

  // Saves the index of correctly answered questions
  const [takenQuestionIndexes, setTakenQuestionIndexes] = useState([]);
  // Holds the index of the current question
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  // Holds how many answers have cycled since the last correct one
  const [cycledAnswersSinceCorrect, setCycledAnswersSinceCorrect] = useState(0);
  // Saves how many RANDOM cycles should go until the correct answer is shown
  // Is randomly set each time the correct answer has been shown
  const [randomCycleAmount, setRandomCycleAmount] = useState(
    Math.floor(Math.random() * 8) + 1
  );

  /**
   * Rolls a random number between 0 and the length of the
   * allQuestions array and sets the value of activeQuestionIndex
   * to that value given that takenQuestionIndexes doesnt contain it.
   *
   * In other words it selects the next active question given it hasnt
   * already been answered
   */
  function setNextRandomQuestionIndex() {
    let nextQuestionIndex = 0;

    /** Keeps rolling a new random value between 0 and the allQuestions
     * array length until a value not existing in takenQuestionIndexes
     * is found
     */
    while (!takenQuestionIndexes.includes(nextQuestionIndex)) {
      nextQuestionIndex = Math.floor(Math.random() * allQuestions.length);
    }

    // Set the active question index to the randomly rolled value
    setActiveQuestionIndex(() => nextQuestionIndex);
  }

  /** Cycles the question answer every time interval */
  useEffect(() => {
    // Set up the interval
    const timer = setInterval(() => {
      // Increment cycles since last correct answer
      setCycledAnswersSinceCorrect((prevState) => prevState + 1);
    }, 2000); // Every 2 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Current question is: {allQuestions[activeQuestionIndex].answer}</h1>
      <h1>Current cycled anser is: </h1>
    </div>
  );
}

export default GamePage;
