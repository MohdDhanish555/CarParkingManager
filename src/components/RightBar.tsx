import React, { useContext } from "react";

import { Box, Button, TextField } from "@mui/material";

import { AppContext } from "../context/AppContext";
import { CarDetailsType } from "../types";

const RightBar = () => {
  const { state } = useContext(AppContext);
  const { dispatch } = useContext(AppContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (state.carDetails.length >= parseInt(state.parkingSpaceCount)) {
      dispatch({
        type: "SHOW_SNACKBAR",
        payload: true,
      });
    } else {
      let randomNumber =
        Math.floor(
          Math.random() * (parseInt(state.parkingSpaceCount) - 1 + 1)
        ) + 1;

      while (randomNumber > 0) {
        if (
          state.carDetails.find(
            (car: CarDetailsType) => car.slot === randomNumber
          )
        ) {
          randomNumber =
            Math.floor(
              Math.random() * (parseInt(state.parkingSpaceCount) - 1 + 1)
            ) + 1;
        } else {
          dispatch({
            type: "ADD_CAR_DETAILS",
            payload: [randomNumber, state.carNumber],
          });
          dispatch({
            type: "CAR_NUMBER",
            payload: "",
          });
          break;
        }
      }
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        id="parking-drawing-registration-input"
        variant="outlined"
        label="Enter Car Number"
        value={state.carNumber}
        onChange={(e) =>
          dispatch({
            type: "CAR_NUMBER",
            payload: e.target.value,
          })
        }
        required
      />
      <Button
        data-testid="RegisterBtn"
        id="parking-drawing-add-car-button"
        type="submit"
        variant="contained"
        disabled={!state.carNumber}
      >
        Register
      </Button>
    </Box>
  );
};

export default RightBar;
