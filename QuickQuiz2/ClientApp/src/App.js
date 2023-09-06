import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import { apiHelper } from './services/ApiHelper';

import WonkyContainerImage from './components/WonkyShapes/WonkyImages/WonkyContainerImage/WonkyContainerImage';

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

      <WonkyContainerImage svgSizeMultiplier="2.0" svgRotateDegree="0" imageSizeMultiplier="0.6"/>
  </div> );
}

export default App;