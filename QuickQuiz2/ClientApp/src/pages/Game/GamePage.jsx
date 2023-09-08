// Logic imports
import React, { useContext, useEffect, useState, useRef } from "react";
// Context import
import { AppContext } from "../../context/AppContext";

function GamePage() {
  // Hard coded values for different timing
  const timeoutOnCorrectAnswer = 1000;
  const timeoutOnWrongAnswer = 3000;
  const randomCyclesUpperLimit = 8;
  const timeForEachAnswer = 1000;

  // Get the context variables
  const { allQuestions, difficulty } = useContext(AppContext);

  // Saves the index of correctly answered questions
  const [takenQuestionIndexes, setTakenQuestionIndexes] = useState([]);
  // Holds the index of the current question
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  // Holds the index of the current answer
  const [activeAnswerIndex, setActiveAnswerIndex] = useState(0);
  // Holds each players points
  const [playerPoints, setPlayerPoints] = useState({
    player1Points: 0,
    player2Points: 0,
  });

  // Mutable reference for state variables
  const stateRef = useRef({
    activeQuestionIndex,
    activeAnswerIndex,
    playerPoints,
  });

  // State variables determining key pressing enabled or not
  const [keyAEnabled, setKeyAEnabled] = useState(true);
  const [keyLEnabled, setKeyLEnabled] = useState(true);

  // Update the ref object whenever the state changes
  useEffect(() => {
    stateRef.current = {
      activeQuestionIndex,
      activeAnswerIndex,
      playerPoints,
      keyAEnabled,
      keyLEnabled,
      allQuestions,
    };
  }, [
    activeQuestionIndex,
    activeAnswerIndex,
    playerPoints,
    keyAEnabled,
    keyLEnabled,
    allQuestions,
  ]);

  /** Due to allQuestions being instantiated as null, the values of
   * the index variables can only be set after the data has been fetched
   */
  useEffect(() => {
    if (allQuestions !== null) {
      setActiveQuestionIndex(() =>
        Math.floor(Math.random() * allQuestions.length)
      );
      setActiveAnswerIndex(() =>
        Math.floor(Math.random() * allQuestions.length)
      );
    }
  }, [allQuestions]);

  // Holds how many answers have cycled since the last correct one
  const [cycledAnswersSinceCorrect, setCycledAnswersSinceCorrect] = useState(0);
  // Saves how many RANDOM cycles should go until the correct answer is shown
  // Is randomly set each time the correct answer has been shown
  const [randomCycleAmount, setRandomCycleAmount] = useState(
    Math.floor(Math.random() * randomCyclesUpperLimit) + 1
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
    let nextQuestionIndex;

    do {
      nextQuestionIndex = Math.floor(
        Math.random() * stateRef.current.allQuestions.length
      );
    } while (takenQuestionIndexes.includes(nextQuestionIndex));

    // Set the active question index to the randomly rolled value
    setActiveQuestionIndex(() => nextQuestionIndex);
  }

  /** Triggers every time interval to set the index of the to be
   * displayed answer either:
   *
   * The correct answer if cycles since last correct answer shown
   * exceeds limit determined randomly
   *
   * OR
   *
   * The wrong answer if cycles dont exceed.
   */
  useEffect(() => {
    if (allQuestions !== null) {
      const timer = setInterval(() => {
        // Increment cycles since last correct answer
        setCycledAnswersSinceCorrect((prevState) => prevState + 1);

        // Variable containing the next answer index (to be changed below)
        let nextAnswerIndex = Math.floor(Math.random() * allQuestions.length);

        // If current cycles exceed determined amount for correct
        // answer then the correct answer index is chosen
        if (cycledAnswersSinceCorrect >= randomCycleAmount) {
          nextAnswerIndex = activeQuestionIndex;
          setCycledAnswersSinceCorrect(() => 0);
          setRandomCycleAmount(
            () => Math.floor(Math.random() * randomCyclesUpperLimit) + 1
          );
        }
        // Displays wrong question answer
        else {
          // Rerolls nextAnswerIndex if it happens to be the active index
          while (nextAnswerIndex === activeQuestionIndex) {
            nextAnswerIndex = Math.floor(Math.random() * allQuestions.length);
          }
        }

        // Save the determined index of next answer to state variable
        setActiveAnswerIndex(() => nextAnswerIndex);
      }, timeForEachAnswer); // Time interval for index determination

      // Clear the interval when the component unmounts
      return () => clearInterval(timer);
    }
  }, [
    allQuestions,
    cycledAnswersSinceCorrect,
    randomCycleAmount,
    activeQuestionIndex,
  ]);

  function disableKeyPress(key, timeout) {
    switch (key) {
      case "a":
        if (stateRef.current.keyAEnabled) {
          setKeyAEnabled(false);
          setTimeout(() => {
            setKeyAEnabled(true);
          }, timeout);
        }
        break;
      case "l":
        if (stateRef.current.keyLEnabled) {
          setKeyLEnabled(false);
          setTimeout(() => {
            setKeyLEnabled(true);
          }, timeout);
        }
    }
  }

  function incrementPlayersPoints(playerProperty) {
    setPlayerPoints((prevstate) => {
      const newState = { ...prevstate };
      newState[playerProperty] += 1;
      return newState;
    });
  }

  function handleKeyPress(event) {
    if (
      stateRef.current.activeAnswerIndex ===
      stateRef.current.activeQuestionIndex
    ) {
      switch (event.code) {
        case "KeyA":
          if (stateRef.current.keyAEnabled) {
            disableKeyPress("a", timeoutOnCorrectAnswer);
            incrementPlayersPoints("player1Points");
            setNextRandomQuestionIndex();
          } else {
            // TODO: Display feedback if attempting to score
            // while players button is disabled
            console.log("Key A disabled");
          }
          break;
        case "KeyL":
          if (stateRef.current.keyLEnabled) {
            disableKeyPress("l", timeoutOnCorrectAnswer);
            incrementPlayersPoints("player2Points");
            setNextRandomQuestionIndex();
          } else {
            // TODO: Display feedback if attempting to score
            // while players button is disabled
            console.log("Key L disabled");
          }
          break;
      }
    } else {
      switch (event.code) {
        case "KeyA":
          disableKeyPress("a", timeoutOnWrongAnswer);
          break;
        case "KeyL":
          disableKeyPress("l", timeoutOnWrongAnswer);
          break;
        default:
          break;
      }
    }
  }

  // Add and remove the event listener using useEffect
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // Only for debugging
  useEffect(() => {
    console.log(playerPoints, keyAEnabled, keyLEnabled);
  }, [playerPoints, keyAEnabled, keyLEnabled]);

  return (
    <div>
      {allQuestions ? (
        <div>
          <h1>
            Current question is: {allQuestions[activeQuestionIndex].answer}
          </h1>
          <h1>
            Current cycled answer is: {allQuestions[activeAnswerIndex].answer}
          </h1>
          <p>Player 1: {playerPoints.player1Points}</p>
          <p>Player 2: {playerPoints.player2Points}</p>
        </div>
      ) : null}
    </div>
  );
}

export default GamePage;
