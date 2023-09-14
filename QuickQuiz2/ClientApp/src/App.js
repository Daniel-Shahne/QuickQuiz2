import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./custom.css";
import { apiHelper } from "./services/ApiHelper";
import { AppContextProvider } from "./context/AppContext";
import HomePage from "./pages/Home/HomePage";
import GamePage from "./pages/Game/GamePage";
import HowToPlayPage from "./pages/HowToPlay/HowToPlayPage";
import ResultsPage from "./pages/Results/ResultsPage";
import SelectDifficultyPage from "./pages/SelectDifficulty/SelectDifficultyPage";
import SelectInfoPage from "./pages/SelectInfo/SelectInfoPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import CategoryInfoPage from "./pages/CategoryInfo/CategoryInfoPage";
import Sound from "react-sound";

function App() {
  const [playStatus, setPlayStatus] = useState(Sound.status.PLAYING);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div>
      <AppContextProvider>
        <div>
          <button onClick={() => setPlayStatus(Sound.status.PLAYING)}>
            Play
          </button>
          <button onClick={() => setPlayStatus(Sound.status.PAUSED)}>
            Pause
          </button>
          <button onClick={() => setIsMuted(!isMuted)}>
            {isMuted ? "Unmute" : "Mute"}
          </button>
          <Sound
            url="/sounds/unnadaj.mp3"
            playStatus={playStatus}
            loop={true}
            volume={50}
            muted={isMuted}
          />
        </div>
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
    </div>
  );
}

export default App;
