import { takeLatest, put, delay } from "redux-saga/effects";

function* getUnits(action) {
  //   const ages = ["Imperial", "Castle", "Feudal", "Dark"];
  //   const filteredAges = ages.splice(action.value.age);
  //   console.log(filteredAges);
  //  let filteredUnits = action.value.units.filter(x => filteredAges.includes(x.age));
  let filteredUnits = action.value.units;

  if (action.value.wood) {
    filteredUnits = filteredUnits.filter(x => x.cost?.Wood >= action.value.wood.min);
    filteredUnits = filteredUnits.filter(x => x.cost?.Wood <= action.value.wood.max);
  }
  if (action.value.food) {
    filteredUnits = filteredUnits.filter(x => x.cost?.Food >= action.value.food.min);
    filteredUnits = filteredUnits.filter(x => x.cost?.Food <= action.value.food.max);
  }

  if (action.value.gold) {
    filteredUnits = filteredUnits.filter(x => x.cost?.Gold >= action.value.gold.min);
    filteredUnits = filteredUnits.filter(x => x.cost?.Gold <= action.value.gold.max);
  }

  yield put({ type: "GET_UNITS_ASYNC", value: filteredUnits });
}

export function* watchUnits() {
  yield takeLatest("GET_UNITS", getUnits);
}
