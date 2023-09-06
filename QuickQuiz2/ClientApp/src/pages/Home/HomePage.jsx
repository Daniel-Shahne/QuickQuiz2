import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

function HomePage() {
  const { difficulty } = useContext(AppContext);

  return <h1>{difficulty}</h1>;
}

export default HomePage;
