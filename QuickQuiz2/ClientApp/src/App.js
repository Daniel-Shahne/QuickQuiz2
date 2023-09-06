import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import { apiHelper } from './services/ApiHelper';

// Wonky Shapes import
import WonkyShapeText1 from './components/WonkyShapes/WonkyTexts/shapesForWonkyTexts/WonkyShapeText1';
import WonkyShapeText2 from './components/WonkyShapes/WonkyTexts/shapesForWonkyTexts/WonkyShapeText2';

// Wonky text container import
import WonkyContainerText from './components/WonkyShapes/WonkyTexts/WonkyContainerText/WonkyContainerText';
import WonkyImageSvg1 from './components/WonkyShapes/WonkyImages/shapesForWonkyImages/WonkyImageSvg1';
import WonkyShapeChar1 from './components/WonkyShapes/WonkyTexts/shapesForWonkyTexts/WonkyShapeChar1';
import WonkyShapeChar2 from './components/WonkyShapes/WonkyTexts/shapesForWonkyTexts/WonkyShapeChar2';


function App() {
  const [question, setQuestion] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const question = await apiHelper.getQuestionById(2);
        console.log(question);
        setQuestion(question);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return ( 
    <div>
      <h2>Hej Jerry, är detta ok?</h2>
      <WonkyShapeText1 shapeFill="#853AC8" sizeMultiplier="1.1"/>
      <WonkyShapeText2 shapeFill="#00AC87" sizeMultiplier="1.2"/>
      <br/>
      <WonkyContainerText shapeId="1" text="Play" shapeFill="#00AC87" sizeMultiplier="1.5" fontSize="15px"/>
      <WonkyContainerText shapeId="2" text="Learn" shapeFill="#00AC87" sizeMultiplier="1.5" fontSize="15px"/>
      <br/>
      <WonkyImageSvg1 sizeMultiplier="1.0" rotateDegree="0"/>
      <br/>
      <WonkyShapeChar1 sizeMultiplier="1.0" shapeFill="#853AC8"/>
      <WonkyShapeChar2 sizeMultiplier="1.0" shapeFill="#00AC87"/>
      <br/>
      <WonkyContainerText shapeId="3" text="A" shapeFill="#00AC87" sizeMultiplier="1.5" fontSize="15px"/>
      <WonkyContainerText shapeId="4" text="L" shapeFill="#853AC8" sizeMultiplier="1.5" fontSize="15px"/>



  </div> );
}

export default App;
