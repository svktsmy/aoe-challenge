import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spacer from "../components/Spacer";
import Range from "../components/Range";
import Ages from "../components/Ages";
import { ages } from "../store/data";
import Table from "../components/Table";

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
    dispatch({
      type: "GET_UNITS",
      value: {
        age: selectedAge,
        wood: selectedWood,
        gold: selectedGold,
        food: selectedFood,
        units
      }
    });
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
          <Ages data={ages} setData={age => setSelectedAge(age)} selected={selectedAge}></Ages>
        </div>
        <div className="ranges">
          <Range name="Gold" onChange={handleInputChange} value={selectedGold}></Range>
          <Range name="Food" onChange={handleInputChange} value={selectedFood}></Range>
          <Range name="Wood" onChange={handleInputChange} value={selectedWood}></Range>
        </div>
      </section>
      <section className="table-section">
        <Table data={filteredUnits} onClick={id => history.push(`/unit/${id}`)}></Table>
      </section>
    </section>
  );
}

export default Unit;
