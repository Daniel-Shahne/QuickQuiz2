import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Layout } from "./components/Layout";
import "./custom.css";
import { apiHelper } from "./services/ApiHelper";
import CategoryItemCircle from "./components/circles/CategoryItemCircle";

function App() {
  const [question, setQuestion] = useState(null);

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
      

        {question ? (
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

        <CategoryItemCircle
        question={question}
        width={"200px"}
        isClickable={true}
    />

    <CategoryItemCircle
        question={question}
        width={"200px"}
        isClickable={true}
    />
    </div>
      ) : (
        0
      )}

    </div>
  );
}

export default App;
