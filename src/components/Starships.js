import React from "react";
import { Card, Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./../App.css";

function Starships({ data }) {
  return (
    <>
      <h1>Starships</h1>
      <br></br>
      <Grid columns={3}>
        {data.map((starships, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{starships.name}</Card.Header>
                  <Card.Description>
                    <strong>Crew Number</strong>
                    <p>{starships.crew}</p>
                    <strong>Length</strong>
                    <p>{starships.lenght}</p>
                    <strong>Cargo Capacity</strong>
                    <p>{starships.cargo_capacity}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
}

export default Starships;
