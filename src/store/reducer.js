import { data } from "../data";

const initialState = {
  units: data.units,
  filteredUnits: data.units
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "GET_UNITS_ASYNC":
      newState.filteredUnits = action.value;
      break;
    default:
      break;
  }
  return newState;
};

export default reducer;
