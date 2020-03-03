import React from "react";

function Range({ name, onChange, value }) {
  return (
    <div className="range">
      <input name={`${name.toLowerCase()}-enabled`} data-testid={name + "-Checkbox"} type="checkbox" onChange={onChange}></input>
      <label>{name}</label>
      <input name={`${name.toLowerCase()}-min`} data-testid={name + "-Min"} type="number" value={value?.min || ""} placeholder="Min" disabled={!value} onChange={onChange}></input>
      <input name={`${name.toLowerCase()}-max`} data-testid={name + "-Max"} placeholder="Max" type="number" value={value?.max || ""} disabled={!value} onChange={onChange}></input>
    </div>
  );
}

export default Range;
