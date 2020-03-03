import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, waitForDomChange, wait } from "@testing-library/react";
import App from "./App";

describe("AOE Challange Test", () => {
  test("Age Filter", async done => {
    const history = createMemoryHistory();
    const { getByText, getByTestId, findAllByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    await fireEvent.click(getByText("Units"));
    await fireEvent.click(getByTestId("Castle-Button"));
    const ages = await findAllByTestId("table-age");
    await expect(ages.map(age => age.innerHTML)).toEqual(expect.arrayContaining(["Castle", "Dark", "Feudal"]));

    done();
  });
  test("Range Filter", async () => {
    const history = createMemoryHistory();
    const { getByText, getByTestId, findAllByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    await fireEvent.click(getByText("Units"));
    await fireEvent.change(getByTestId("Wood-Checkbox"), { target: { checked: true } });
    await fireEvent.change(getByTestId("Wood-Min"), { target: { value: 100 } });
    await fireEvent.change(getByTestId("Wood-Max"), { target: { value: 150 } });
    const woodCosts = await findAllByTestId("table-cost-wood");
    woodCosts.map(d => {
      expect(Number(d.innerHTML)).toBeGreaterThanOrEqual(100);
      expect(Number(d.innerHTML)).toBeLessThanOrEqual(150);
    });
  });
});
