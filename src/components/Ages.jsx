import React from "react";

function Ages({ data, setData, selected }) {
  return data.map(d => (
    <button
      key={d.value + "age"}
      data-testid={d.label + "-Button"}
      onClick={() => {
        setData(d.value === 0 ? data.length : d.value);
      }}
      className={d.value === 0 ? "button-all" : d.value <= selected ? "button-active" : undefined}
    >
      {d.label}
    </button>
  ));
}

export default Ages;
