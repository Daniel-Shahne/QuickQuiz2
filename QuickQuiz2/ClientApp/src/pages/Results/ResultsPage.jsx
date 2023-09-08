import React from "react";
import { useLocation } from "react-router-dom";

function ResultsPage() {
  const { state } = useLocation();
  console.log(state);

  return <h1>Result: Jerry wins!!!</h1>;
}

export default ResultsPage;
