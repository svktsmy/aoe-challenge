import React from "react";

function Table({ data, onClick }) {
  return (
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
        {data.map(unit => (
          <tr key={unit.id} onClick={() => onClick(unit.id)}>
            <td>{unit.id}</td>
            <td>{unit.name}</td>
            <td data-testid="table-age">{unit.age}</td>
            <td data-testid="table-cost">
              <label>
                {unit.cost?.Wood ? `Wood:` : null}
                <div data-testid="table-cost-wood">{unit.cost?.Wood}</div>
              </label>
              <label>
                {unit.cost?.Gold ? `Gold:` : null}
                <div data-testid="table-cost-gold">{unit.cost?.Gold}</div>
              </label>
              <label>
                {unit.cost?.Food ? `Food:` : null}
                <div data-testid="table-costfood">{unit.cost?.Food}</div>
              </label>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
