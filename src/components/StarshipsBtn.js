import React, { useState, useEffect } from "react";
import Starships from "./Starships";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./../App.css";

const StarshipsBtn = () => {
  const [isShow, setIsShow] = React.useState(true);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchStarships() {
      let res = await fetch("https://swapi.dev/api/starships/");
      let data = await res.json();
      setStarships(data.results);
    }

    fetchStarships();
  }, []);

  return (
    <>
      {isShow ? (
        <>
          <Button onClick={handleClick}>
            Show me info about the starships
          </Button>
          <br />
          <br />
        </>
      ) : (
        <>
          <Button className="center" onClick={handleClick}>
            Hide info about the starships
          </Button>
          <Starships data={starships} />
          <br />
          <br />
        </>
      )}
    </>
  );
};

export default StarshipsBtn;
