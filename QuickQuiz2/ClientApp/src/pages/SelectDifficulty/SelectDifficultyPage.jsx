import React from "react";
import { Link } from 'react-router-dom';
import WonkyContainerText from '../../components/WonkyShapes/WonkyTexts/WonkyContainerText/WonkyContainerText';
import difficultyStyle from './SelectDifficultyPage.module.css'
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

function SelectDifficultyPage() {

  const {difficulty, setDifficulty} = useContext(AppContext);

  function setEasyDifficulty() {
    setDifficulty('easy')
    console.log(difficulty)
  }

  function setHardDifficulty() {
    setDifficulty('hard')
    console.log(difficulty)
  }

  return ( 
    <div className={difficultyStyle.container}>
      <h1>Choose Difficulty!</h1>

      <Link to='/howtoplay' onClick={setEasyDifficulty}>
        <WonkyContainerText shapeId='1' text='Easy' shapeFill='#00AC87' sizeMultiplier='4' fontSize='30px'/>
      </Link>
      <Link to='/howtoplay' onClick={setHardDifficulty}>
        <WonkyContainerText shapeId='2' text='Hard' shapeFill='#853AC8' sizeMultiplier='4' fontSize='30px'/>
      </Link>
    </div> 
    
    );
}

export default SelectDifficultyPage;
