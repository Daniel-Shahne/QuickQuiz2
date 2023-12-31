// Logic imports
import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// Context import
import { AppContext } from "../../context/AppContext";
// Style import
import gamePageStyle from "./gamepage.module.css";
// Custom component imports
import CategoryItemCircle from "../../components/circles/CategoryItemCircle";
import WonkyContainerText from "../../components/WonkyShapes/WonkyTexts/WonkyContainerText/WonkyContainerText";
import BackArrow from "../../components/BackArrow/BackArrow";
// Image imports
import unpauseBtnImage from "./unpauseBtn.png";

function GamePage() {
  // Hard coded values
  const timeoutOnCorrectAnswer = 1000;
  const timeoutOnWrongAnswer = 3000;
  const randomCyclesUpperLimit = 8;
  const timeForEachAnswer = 1000;
  const questionLimit = 5;
  const buttonEnabledFill = "#853AC8";
  const buttonDisabledFill = "#ED3309";
  const buttonRightAnswer = "#00AC87";

  // Get the context variables
  const { allQuestions, difficulty } = useContext(AppContext);

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

  // Navigator for going between pages
  const navigator = useNavigate();

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

  // Separate state variables for Player 1 and Player 2 shaking
  const [isPlayer1Shaking, setIsPlayer1Shaking] = useState(false);
  const [isPlayer2Shaking, setIsPlayer2Shaking] = useState(false);

  const [isPlayer1right, setisPlayer1right] = useState(false);
  const [isPlayer2right, setisPlayer2right] = useState(false);

  // State variables determining key pressing enabled or not
  const [keyAEnabled, setKeyAEnabled] = useState(true);
  const [keyLEnabled, setKeyLEnabled] = useState(true);

  // Boolean state variable determining that game is paused or not.
  const [gameIsPaused, setGameIsPaused] = useState(false);

  // Holds how many answers have cycled since the last correct one
  const [cycledAnswersSinceCorrect, setCycledAnswersSinceCorrect] = useState(0);

  // Saves how many RANDOM cycles should go until the next correct answer is shown
  // Is randomly set after each time the correct answer has been shown
  const [randomCycleAmount, setRandomCycleAmount] = useState(
    Math.floor(Math.random() * randomCyclesUpperLimit) + 1
  );

  // Mutable reference for state variables
  const stateRef = useRef({
    activeQuestionIndex,
    activeAnswerIndex,
    playerPoints,
  });

  // Update the ref object whenever the state changes
  useEffect(() => {
    stateRef.current = {
      activeQuestionIndex,
      activeAnswerIndex,
      playerPoints,
      keyAEnabled,
      keyLEnabled,
      allQuestions,
      gameIsPaused,
      takenQuestionIndexes,
    };
  }, [
    activeQuestionIndex,
    activeAnswerIndex,
    playerPoints,
    keyAEnabled,
    keyLEnabled,
    allQuestions,
    gameIsPaused,
    takenQuestionIndexes,
  ]);

  /** Navigates to the results page if the questions limit
   * has been reached
   */
  useEffect(() => {
    if (takenQuestionIndexes.length >= questionLimit) {
      navigator("/results", { state: stateRef.current.playerPoints });
      return;
    }
  }, [takenQuestionIndexes]);

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
   * equals limit determined randomly. Will also set a new random
   * cycle amount (for cycles until next correct answer displays)
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
        // Display wrong question answer
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

  /**
   * Temporarily disables a key for a given time
   * @param {string} key A character representing the keyboard key, either "a" or "l"
   * @param {*} timeout The timout in milliseconds
   */
  function temporarilyDisableKeyPress(key, timeout) {
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

  /**
   * Increments a players points, stored in the playerPoints
   * state variable.
   * @param {*} playerProperty Either "player1Points" or "player2Points", the properties of the object state variable
   */
  function incrementPlayersPoints(playerProperty) {
    if (playerProperty === "player1Points") {
      setIsPlayer1Shaking(true);
      setTimeout(() => setIsPlayer1Shaking(false), 1000);
      setisPlayer1right(true);
      setTimeout(() => setisPlayer1right(false), 1000);
    } else if (playerProperty === "player2Points") {
      setIsPlayer2Shaking(true);
      setTimeout(() => setIsPlayer2Shaking(false), 1000);
      setisPlayer2right(true);
      setTimeout(() => setisPlayer2right(false), 1000);
    }
    setPlayerPoints((prevstate) => {
      const newState = { ...prevstate };
      newState[playerProperty] += 1;
      return newState;
    });
  }

  /**
   * Stores the currently active question index in the array saving
   * all the indexes of taken questions
   */
  function addActiveQuestionToTakenQuestions() {
    setTakenQuestionIndexes((prevState) => {
      return [...prevState, stateRef.current.activeQuestionIndex];
    });
  }

  /**
   * Determines whether a player should get points or not when
   * their key is pressed
   * @param {*} event Event arguments passed by the parent caller method as this method isnt intended to be called outside an event listener
   */
  function handleKeyPress(event) {
    // If the answer actually is for the current question
    if (
      stateRef.current.activeAnswerIndex ===
      stateRef.current.activeQuestionIndex
    ) {
      // Switch to determine which player to give points too
      // Inner if clause checks if this player is allowed to receive points
      // by checking for their button being enabled and game not being paused
      switch (event.code) {
        case "KeyA":
          if (stateRef.current.keyAEnabled && !stateRef.current.gameIsPaused) {
            temporarilyDisableKeyPress("a", timeoutOnCorrectAnswer);
            incrementPlayersPoints("player1Points");
            addActiveQuestionToTakenQuestions();

            setNextRandomQuestionIndex();
            setKeyAEnabled(() => true);
            setKeyLEnabled(() => true);
          }
          break;
        case "KeyL":
          if (stateRef.current.keyLEnabled && !stateRef.current.gameIsPaused) {
            temporarilyDisableKeyPress("l", timeoutOnCorrectAnswer);
            incrementPlayersPoints("player2Points");
            addActiveQuestionToTakenQuestions();
            setNextRandomQuestionIndex();
            setKeyAEnabled(() => true);
            setKeyLEnabled(() => true);
          }
          break;
      }
    }
    // If the answer is incorrect to the current question
    else {
      // Switch to determine which player to penalize
      switch (event.code) {
        case "KeyA":
          temporarilyDisableKeyPress("a", timeoutOnWrongAnswer);
          break;
        case "KeyL":
          temporarilyDisableKeyPress("l", timeoutOnWrongAnswer);
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

  return (
    <div>
      {gameIsPaused ? (
        <div id={gamePageStyle.darkPlayPageOverlay}>
          <div id={gamePageStyle.darkPlayPageFlexContainer}>
            <div
              id={gamePageStyle.darkPlayPageText}
              className={`${gamePageStyle.playPageText} greenInnerWhiteOuterTextSkinny`}
            >
              Game is paused!
            </div>
            <div
              id={gamePageStyle.darkPlayPageExplanation}
              className={`${gamePageStyle.playPageText} greenInnerWhiteOuterTextSkinny`}
            >
              Press the button below to unpause
            </div>
            <img
              src={unpauseBtnImage}
              alt="Unpause button"
              id={gamePageStyle.unpauseBtnImage}
              onClick={() => setGameIsPaused(() => false)}
            />
          </div>
        </div>
      ) : null}
      {allQuestions ? (
        <div id={gamePageStyle.bgContainer}>
          <div id={gamePageStyle.gridAndPauseParent}>
            <div className={gamePageStyle.gridContainer}>
              <span id={gamePageStyle.buttonA}>
                <WonkyContainerText
                  shapeId="3"
                  text="A"
                  sizeMultiplier="6.0"
                  fontSize="100px"
                  shapeFill={
                    isPlayer1right
                      ? buttonRightAnswer
                      : keyAEnabled
                      ? buttonEnabledFill
                      : buttonDisabledFill
                  }
                />
              </span>
              <span id={gamePageStyle.buttonL}>
                <WonkyContainerText
                  shapeId="4"
                  text="L"
                  sizeMultiplier="6.0"
                  fontSize="100px"
                  shapeFill={
                    isPlayer2right
                      ? buttonRightAnswer
                      : keyLEnabled
                      ? buttonEnabledFill
                      : buttonDisabledFill
                  }
                />
              </span>
              <h2
                id={gamePageStyle.player1}
                className={`${"greenInnerWhiteOuterTextSkinny"} ${
                  isPlayer1Shaking ? gamePageStyle.shake : ""
                }`}
              >
                Player 1 points: {playerPoints.player1Points}
              </h2>
              <h2
                id={gamePageStyle.player2}
                className={`${"greenInnerWhiteOuterTextSkinny"} ${
                  isPlayer2Shaking ? gamePageStyle.shake : ""
                }`}
              >
                Player 2 points: {playerPoints.player2Points}
              </h2>
              <div id={gamePageStyle.playItemContainer}>
                <div id={gamePageStyle.playItemFlexBox}>
                  {difficulty === "easy" ? (
                    <CategoryItemCircle
                      question={allQuestions[activeQuestionIndex]}
                      width="400px"
                      isClickable={false}
                    />
                  ) : null}
                  {difficulty === "hard" ? (
                    <h4
                      className={"greenInnerWhiteOuterTextSkinny"}
                      id={gamePageStyle.hardDiffDesc}
                      style={{ fontSize: "30px" }}
                    >
                      {allQuestions[activeQuestionIndex].hardDiffDesc}
                    </h4>
                  ) : null}
                  <h2
                    className={"greenInnerWhiteOuterTextSkinny"}
                    style={{ fontSize: "60px" }}
                  >
                    Which animal is this?
                  </h2>
                  {!gameIsPaused ? (
                    <h3
                      className={"greenInnerWhiteOuterTextSkinny"}
                      style={{ fontSize: "50px" }}
                    >
                      {allQuestions[activeAnswerIndex].answer}
                    </h3>
                  ) : (
                    <h3 className={"greenInnerWhiteOuterTextSkinny"}>
                      Game is paused
                    </h3>
                  )}
                </div>
              </div>
              <span className={"backarrow"}>
                <BackArrow onClickUrl="/howtoplay" />
              </span>
              {!gameIsPaused ? (
                <span
                  id={gamePageStyle.paus}
                  onClick={() => setGameIsPaused(() => true)}
                ></span>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <h1>Could not load questions</h1>
      )}
    </div>
  );
}

export default GamePage;
