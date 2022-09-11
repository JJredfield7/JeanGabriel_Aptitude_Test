import React from "react";
import { Card, Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./../App.css";

function Planets({ data }) {
  return (
    <>
      <h1>Planets</h1>
      <br></br>
      <Grid columns={3}>
        {data.map((planets, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{planets.name}</Card.Header>
                  <Card.Description>
                    <strong>Climate</strong>
                    <p>{planets.climate}</p>
                    <strong>Gravity</strong>
                    <p>{planets.gravity}</p>
                    <strong>Residents</strong>
                    <p>{planets.residents}</p>
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

export default Planets;
