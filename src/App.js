import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import PeopleBtn from "./components/PeopleBtn";
import PlanetsBtn from "./components/PlanetsBtn";
import StarshipsBtn from "./components/StarshipsBtn";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
