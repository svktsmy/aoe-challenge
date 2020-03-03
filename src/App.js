import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import "./App.scss";
import Home from "./pages/Home";
import Units from "./pages/Units";
import Unit from "./pages/Unit";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./store/reducer";
import createSagaMiddleware from "redux-saga";
import { watchUnits } from "./store/saga";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchUnits);
function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/units" exact component={Units} />
            <Route path="/unit/:id" exact component={Unit} />
            <Route path="/" render={() => <div>404</div>} />
          </Switch>
        </BrowserRouter>
      </Wrapper>
    </Provider>
  );
}

export default App;
