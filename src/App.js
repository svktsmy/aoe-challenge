import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import "./App.scss";
import Home from "./pages/Home";
import Unit from "./pages/Unit";

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/units" exact component={Unit} />
          {/* <Route path="/about" exact component={About} /> */}
          {/* <Route path="/posts/:id" exact component={Post} /> */}
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
