import { ADD_LOCATION, DELETE_LOCATION, SELECT_LOCATION, DESELECT_LOCATION } from "../actions/actions";

const initialState = {
  locations: [],
  selectedLocation: null
};

const LocationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCATION:
      return {
        ...state,
        locations: state.locations.concat({
          key: `${Math.random()}`,
          name: action.name,
          image: {
            uri: "http://static.asiawebdirect.com/m/phuket/portals/phuket-com/homepage/island/naiharn-beach/pagePropertiesImage/naiharn-beach.jpg"
          }
        })
      };
    case DELETE_LOCATION:
      return {
        ...state,
        locations: state.locations.filter(location => {
          return location.key !== state.selectedLocation.key;
        }),
        selectedLocation: null
      };
    case SELECT_LOCATION:
      return {
        ...state,
        selectedLocation: state.locations.find(location => {
          return location.key === action.key;
        })
      };
    case DESELECT_LOCATION:
      return {
        ...state,
        selectedLocation: null
      };
    default:
      return state;
  }
};

export default LocationsReducer;
