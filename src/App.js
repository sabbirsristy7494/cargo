import React from "react";

import Header from "./components/Layout/Header";
import { Container } from "@material-ui/core";

function App(props) {
  return (
    <div className="App" style={{ backgroundColor: "#5FADC1" }}>
      <Header />
      <div>
        <Container>{props.children}</Container>
      </div>
      <footer>This is footer</footer>
    </div>
  );
}

export default App;
