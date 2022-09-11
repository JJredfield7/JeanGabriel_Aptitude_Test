import React from "react";
import "../App.css";
import { Container } from "semantic-ui-react";
import PeopleBtn from "../components/PeopleBtn";
import PlanetsBtn from "../components/PlanetsBtn";
import StarshipsBtn from "../components/StarshipsBtn";
import Header from "../components/Header";
import SearchBtn from "../components/SearchBtn";
import Footer from "../components/Footer";

function MainPage() {
  return (
    <div>
      <Container>
        <Header />
        <PeopleBtn />
        <StarshipsBtn />
        <PlanetsBtn />
        <SearchBtn />
        <Footer />
      </Container>
    </div>
  );
}

export default MainPage;
