import { ActionType, StateType } from "../types";

const initState: StateType = {
  parkingSpaceCount: "1",
  carNumber: "",
  carDetails: [],
  currentCarDetails: {},
  showSnackbar: false,
  showModal: false,
  totalPrice: 0,
};

const reducer = (state = initState, action: ActionType) => {
  switch (action.type) {
    case "PARKING_SPACE":
      return {
        ...state,
        parkingSpaceCount: action.payload,
      };

    case "CAR_NUMBER":
      return {
        ...state,
        carNumber: action.payload,
      };
    case "ADD_CAR_DETAILS":
      return {
        ...state,
        carDetails: [
          ...state.carDetails,
          {
            slot: action.payload[0],
            carNumber: action.payload[1],
            date: new Date(),
          },
        ],
      };
    case "DELETE_CAR_DETAILS":
      return {
        ...state,
        carDetails: state.carDetails.filter(
          (car) => car.slot !== action.payload
        ),
      };
    case "CURRENT_CAR_DETAILS":
      return {
        ...state,
        currentCarDetails: state.carDetails.filter(
          (car) => car.slot === action.payload
        ),
      };
    case "SHOW_SNACKBAR":
      return {
        ...state,
        showSnackbar: action.payload,
      };
    case "SHOW_MODAL":
      return {
        ...state,
        showModal: action.payload,
      };
    case "TOTAL_PRICE":
      return {
        ...state,
        totalPrice: action.payload,
      };

    default:
      return state;
  }
};

export { initState, reducer };
