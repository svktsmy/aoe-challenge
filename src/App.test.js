import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, waitForDomChange } from "@testing-library/react";
import App from "./App";

describe("AOE Challange Test", () => {
  const history = createMemoryHistory();
  const { getByText, findByText, debug, findByTestId, findAllByTestId } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  beforeAll(async () => {
    await fireEvent.click(getByText("Units"));
  });

  it("Age Filter", async done => {
    const ages = await findAllByTestId("table-age");
    expect(ages.map(age => age.innerHTML)).toEqual(expect.not.arrayContaining(["Feudalx"]));
    done();
  });
});
