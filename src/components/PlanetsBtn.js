import React, { useState, useEffect } from "react";
import Planets from "./Planets";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./../App.css";

const PlanetsBtn = () => {
  const [isShow, setIsShow] = React.useState(true);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchPlanets() {
      let res = await fetch("https://swapi.dev/api/planets/");
      let data = await res.json();
      setPlanets(data.results);
    }

    fetchPlanets();
  }, []);

  return (
    <>
      {isShow ? (
        <>
          <Button onClick={handleClick}>Learn more about the planets</Button>
          <br />
          <br />
        </>
      ) : (
        <>
          <Button className="center" onClick={handleClick}>
            Hide info about the planets
          </Button>
          <Planets data={planets} />
          <br />
          <br />
        </>
      )}
    </>
  );
};

export default PlanetsBtn;
