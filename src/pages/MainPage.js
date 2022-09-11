import React from "react";
import "../App.css";
import { Container } from "semantic-ui-react";
import PeopleBtn from "../components/PeopleBtn";
import PlanetsBtn from "../components/PlanetsBtn";
import StarshipsBtn from "../components/StarshipsBtn";
import Header from "../components/Header";

function MainPage() {
  return (
    <div>
      <Container>
        <Header />
        <PeopleBtn />
        <StarshipsBtn />
        <PlanetsBtn />
      </Container>
    </div>
  );
}

export default MainPage;
