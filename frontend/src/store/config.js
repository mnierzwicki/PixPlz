import { createStore, combineReducers } from "redux";

import LocationsReducer from "./reducers/locations";

const rootReducer = combineReducers({
  locations: LocationsReducer
});

const configStore = () => {
  return createStore(rootReducer);
};

export default configStore;
