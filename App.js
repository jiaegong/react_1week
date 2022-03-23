import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import Detail from "./Detail";

function App() {
  return (
    <div className="App">
      <Container>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/detail/:day">
          <Detail />
        </Route>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 350px;
  width: 80vw;
  height: 90vh;
  margin: 5vh auto;
  padding: 5vh 0px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border-radius: 5px;
`;

export default App;
