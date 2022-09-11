import React, { useState, useEffect } from "react";
import People from "./People";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./../App.css";

const PeopleBtn = () => {
  const [isShow, setIsShow] = React.useState(true);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/");
      let data = await res.json();
      setPeople(data.results);
    }

    fetchPeople();
  }, []);

  return (
    <>
      {isShow ? (
        <>
          <Button onClick={handleClick}>
            See more about Star Wars characters
          </Button>
          <br />
          <br />
        </>
      ) : (
        <>
          <Button className="center" onClick={handleClick}>
            Hide info about Star Wars characters
          </Button>
          <People data={people} />
          <br />
          <br />
        </>
      )}
    </>
  );
};

export default PeopleBtn;
