import { takeLatest, put } from "redux-saga/effects";

function* getUnits(action) {
  const ages = ["Dark", "Feudal", "Castle", "Imperial"];
  const filteredAges = ages.filter((d, i) => i < action.value.age);

  let filteredUnits = action.value.units.filter(x => filteredAges.includes(x.age));

  if (action.value.wood) {
    if (action.value.wood.min) filteredUnits = filteredUnits.filter(x => x.cost?.Wood >= action.value.wood.min);
    if (action.value.wood.max) filteredUnits = filteredUnits.filter(x => x.cost?.Wood <= action.value.wood.max);
  }
  if (action.value.food) {
    if (action.value.food.min) filteredUnits = filteredUnits.filter(x => x.cost?.Food >= action.value.food.min);
    if (action.value.food.max) filteredUnits = filteredUnits.filter(x => x.cost?.Food <= action.value.food.max);
  }

  if (action.value.gold) {
    if (action.value.gold.min) filteredUnits = filteredUnits.filter(x => x.cost?.Gold >= action.value.gold.min);
    if (action.value.gold.max) filteredUnits = filteredUnits.filter(x => x.cost?.Gold <= action.value.gold.max);
  }

  yield put({ type: "GET_UNITS_ASYNC", value: filteredUnits });
}

export function* watchUnits() {
  yield takeLatest("GET_UNITS", getUnits);
}
