import React, { createContext, useContext, useState, useEffect } from "react";
import { apiHelper } from "../services/ApiHelper";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [allQuestions, setAllQuestions] = useState(null);
  const [difficulty, setDifficulty] = useState("easy");

  useEffect(() => {
    // Fetch all questions when the component mounts
    async function fetchAllQuestions() {
      try {
        const questions = await apiHelper.getAllQuestions();
        setAllQuestions(questions);
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      }
    }

    fetchAllQuestions();
  }, []);

  return (
    <AppContext.Provider value={{ allQuestions, difficulty, setDifficulty }}>
      {children}
    </AppContext.Provider>
  );
}
