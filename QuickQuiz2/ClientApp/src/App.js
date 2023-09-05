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
      <WonkyShapeText1 shapeFill="#853AC8"/>
      <WonkyShapeText1 shapeFill="#00AC87"/>
      <WonkyShapeText2 shapeFill="#853AC8"/>
      <WonkyShapeText2 shapeFill="#00AC87"/>
      <br/>
      <WonkyContainerText shapeId="1" text="alhamdillulah" shapeFill="#00AC87"/>
  </div> );
}

export default App;
