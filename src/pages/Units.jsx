import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spacer from "../components/Spacer";

const ages = [
  { label: "All", value: 0 },
  {
    label: "Dark",
    value: 1
  },
  {
    label: "Feudal",
    value: 2
  },
  {
    label: "Castle",
    value: 3
  },
  {
    label: "Imperial",
    value: 4
  }
];

function Unit() {
  const history = useHistory();
  const dispatch = useDispatch();
  const units = useSelector(state => state.units);
  const filteredUnits = useSelector(state => state.filteredUnits);
  const [selectedAge, setSelectedAge] = useState(4);
  const [selectedWood, setSelectedWood] = useState(null);
  const [selectedGold, setSelectedGold] = useState(null);
  const [selectedFood, setSelectedFood] = useState(null);

  useEffect(() => {
    dispatch({ type: "GET_UNITS", value: { age: selectedAge, wood: selectedWood, gold: selectedGold, food: selectedFood, units } });
  }, [selectedAge, selectedWood, selectedGold, selectedFood, units, dispatch]);
  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (name === "wood-min") {
      if (value < 0 || value > 200) return false;
      setSelectedWood({ ...selectedWood, min: value });
    }
    if (name === "wood-max") {
      if (value < 0 || value > 200) return false;
      setSelectedWood({ ...selectedWood, max: value });
    }
    if (name === "wood-enabled") {
      setSelectedWood(value ? {} : undefined);
    }
    if (name === "gold-min") {
      if (value < 0 || value > 200) return false;
      setSelectedGold({ ...selectedGold, min: value });
    }
    if (name === "gold-max") {
      if (value < 0 || value > 200) return false;
      setSelectedGold({ ...selectedGold, max: value });
    }
    if (name === "gold-enabled") {
      setSelectedGold(value ? {} : undefined);
    }
    if (name === "food-min") {
      if (value < 0 || value > 200) return false;
      setSelectedFood({ ...selectedFood, min: value });
    }
    if (name === "food-max") {
      if (value < 0 || value > 200) return false;
      setSelectedFood({ ...selectedFood, max: value });
    }
    if (name === "food-enabled") {
      setSelectedFood(value ? {} : undefined);
    }
  };

  return (
    <section data-testid="units-page">
      <Spacer></Spacer>
      <section className="filter-section">
        <div className="ages">
          {ages.map(d => (
            <button
              key={d.value + "age"}
              data-testid={d.label + "button"}
              onClick={() => {
                setSelectedAge(d.value === 0 ? ages.length : d.value);
              }}
              className={d.value === 0 ? "button-all" : d.value <= selectedAge ? "button-active" : undefined}
            >
              {d.label}
            </button>
          ))}
        </div>
        <div className="ranges">
          <Range name="Gold" onChange={handleInputChange} value={selectedGold}></Range>
          <Range name="Food" onChange={handleInputChange} value={selectedFood}></Range>
          <Range name="Wood" onChange={handleInputChange} value={selectedWood}></Range>
        </div>
      </section>
      <section className="table-section">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {filteredUnits.map(unit => (
              <tr
                key={unit.id}
                onClick={() => {
                  history.push(`/unit/${unit.id}`);
                }}
              >
                <td>{unit.id}</td>
                <td>{unit.name}</td>
                <td data-testid="table-age">{unit.age}</td>
                <td>
                  {unit.cost?.Wood ? `Wood:${unit.cost.Wood}` : null} {unit.cost?.Food ? `Food:${unit.cost.Food}` : null} {unit.cost?.Gold ? `Gold:${unit.cost.Gold}` : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
}
function Range({ name, onChange, value }) {
  return (
    <div className="range">
      <input name={`${name.toLowerCase()}-enabled`} type="checkbox" onChange={onChange}></input>
      <label>{name}</label>
      <input name={`${name.toLowerCase()}-min`} type="number" value={value?.min || ""} placeholder="min" disabled={!value} onChange={onChange}></input>
      <input name={`${name.toLowerCase()}-max`} placeholder="max" type="number" value={value?.max || ""} disabled={!value} onChange={onChange}></input>
    </div>
  );
}
export default Unit;
