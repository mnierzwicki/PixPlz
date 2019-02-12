import { ADD_LOCATION, DELETE_LOCATION, SELECT_LOCATION, DESELECT_LOCATION } from "./actions";

export const addLocation = name => {
  return {
    type: ADD_LOCATION,
    name: name
  };
};

export const deleteLocation = () => {
  return {
    type: DELETE_LOCATION
  };
};

export const selectLocation = key => {
  return {
    type: SELECT_LOCATION,
    key: key
  };
};

export const deselectLocation = () => {
  return {
    type: DESELECT_LOCATION
  };
};
