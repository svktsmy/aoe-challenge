import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Slider from "../components/Slider";

function Unit() {
  const history = useHistory();
  const dispatch = useDispatch();
  const units = useSelector(state => state.units);
  const filteredUnits = useSelector(state => state.filteredUnits);
  const [selectedAge, setSelectedAge] = useState(0);
  const [selectedWood, setSelectedWood] = useState({ min: 20, max: 20 });
  const [selectedGold, setSelectedGold] = useState({ min: 20, max: 20 });
  const [selectedFood, setSelectedFood] = useState(null);
  const handleClick = () => {
    // history.push("/");
    dispatch({ type: "GET_UNITS", value: { age: selectedAge, wood: selectedWood, gold: selectedGold, food: selectedFood, units } });
  };
  return (
    <table className="table">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Cost</th>
      </tr>
      {filteredUnits.map(unit => (
        <tr onClick={handleClick}>
          <td>{unit.id}</td>
          <td>{unit.name}</td>
          <td>{unit.age}</td>
          <td>
            {unit.cost?.Wood ? `Wood:${unit.cost.Wood}` : null} {unit.cost?.Food ? `Food:${unit.cost.Food}` : null}{" "}
            {unit.cost?.Gold ? `Gold:${unit.cost.Gold}` : null}
          </td>
        </tr>
      ))}
    </table>
  );
}

export default Unit;
