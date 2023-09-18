import React from "react";
import { Route, Routes } from "react-router-dom";
import "./custom.css";
import { AppContextProvider } from "./context/AppContext";
import HomePage from "./pages/Home/HomePage";
import GamePage from "./pages/Game/GamePage";
import HowToPlayPage from "./pages/HowToPlay/HowToPlayPage";
import ResultsPage from "./pages/Results/ResultsPage";
import SelectDifficultyPage from "./pages/SelectDifficulty/SelectDifficultyPage";
import SelectInfoPage from "./pages/SelectInfo/SelectInfoPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import CategoryInfoPage from "./pages/CategoryInfo/CategoryInfoPage";
import Music from "./components/music/Music";

function App() {
  return (
    <div>
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/selectdifficulty" element={<SelectDifficultyPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/howtoplay" element={<HowToPlayPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/categoryinfo/:index" element={<CategoryInfoPage />} />
          <Route path="/selectinfo" element={<SelectInfoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppContextProvider>
      <Music/>
    </div>
  );
}

export default App;
