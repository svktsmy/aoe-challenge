import React from "react";
import { useSelector } from "react-redux";
import Spacer from "../components/Spacer";

function Unit(props) {
  const { id } = props.match.params;
  const units = useSelector(state => state.units);
  const selectedUnit = units.find(x => x.id === Number(id));

  return (
    <React.Fragment>
      <Spacer></Spacer>
      <section className="detail-section">
        {Object.keys(selectedUnit).map(d => (
          <div className="detail-item">
            <label>{d.toUpperCase().replace("_", " ")}</label>
            <div className="value">{d === "cost" ? `Wood:${selectedUnit[d]?.Wood || `None`} Gold:${selectedUnit[d]?.Gold || "None"} Food:${selectedUnit[d]?.Food || "None"}` : selectedUnit[d].toString()}</div>
          </div>
        ))}
      </section>
    </React.Fragment>
  );
}

export default Unit;
