import React, { useState } from "react";
import Search from "./Search";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./../App.css";

const SearchBtn = () => {
  const [isShow, setIsShow] = React.useState(true);
  const [people, setPeople] = useState([]);
  const [NameToSearch, setNameToSearch] = useState("");

  const handleChange = (event) => {
    setNameToSearch(event.target.value);
  };

  function handleClick() {
    if (NameToSearch !== "") {
      setIsShow(true);
      async function fetchPeople() {
        let res = await fetch(
          "https://swapi.dev/api/people/?search=" + NameToSearch
        );
        let data = await res.json();
        setPeople(data.results);
      }

      fetchPeople();
    } else {
      setIsShow(false);
    }
  }

  return (
    <>
      <hr />
      <br />
      <h3>Or type a character name to find more about them</h3>
      <br />
      <br />
      <input type="text" name="search" onChange={handleChange} />
      <br />
      <br />
      <Button onClick={handleClick}>Search for a character</Button>
      <br />
      <br />
      {isShow ? (
        <Search data={people} />
      ) : (
        <p>Please enter something in the search box</p>
      )}
    </>
  );
};

export default SearchBtn;
