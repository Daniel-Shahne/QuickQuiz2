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
      <CategoryItemCircle
        imagePath={"crocodile.png"}
        width={"400px"}
        isClickable={true}
      />
      {/* {question ? (
        <img
          src={`/images/animals/${question.imagePath}`}
          alt=""
          className="item-image"
        />
      ) : (
        0
      )}

      <h2>Hej Jerry, är detta ok?</h2> */}
    </div>
  );
}

export default App;
