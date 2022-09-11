import React from "react";
import { Card, Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./../App.css";

function People({ data }) {
  return (
    <>
      <h1>People</h1>
      <br></br>
      <Grid columns={3}>
        {data.map((people, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{people.name}</Card.Header>
                  <Card.Description>
                    <strong>Eye Color</strong>
                    <p>{people.eye_color}</p>
                    <strong>Height</strong>
                    <p>{people.height}</p>
                    <strong>Species</strong>
                    <p>{people.species}</p>
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

export default People;
