import { Paper, Typography, Button } from "@mui/material";
import { useContext } from "react";

import { SlotProps } from "../types";

import { AppContext } from "../context/AppContext";

const ParkingSlot = ({ slotNo, occupied }: SlotProps) => {
  const { dispatch } = useContext(AppContext);

  const handleExitClick = (slotNo: number) => {
    dispatch({
      type: "SHOW_MODAL",
      payload: true,
    });
    dispatch({
      type: "CURRENT_CAR_DETAILS",
      payload: slotNo,
    });
  };

  return (
    <Paper
      id={
        occupied
          ? `parking-drawing-registered-${slotNo}`
          : `parking-drawing-space-${slotNo}`
      }
      elevation={15}
      sx={{
        height: "150px",
        width: "125px",
        p: "1rem",
        bgcolor: occupied ? "red" : "yellowgreen",
      }}
    >
      <Typography id={`parking-drawing-space-number-${slotNo}`} variant="h6">
        P{slotNo}
      </Typography>
      {!occupied ? (
        <Typography variant="h5">Available</Typography>
      ) : (
        <Button
          data-testid="exitBtn"
          variant="contained"
          color="error"
          onClick={() => handleExitClick(slotNo)}
        >
          Exit
        </Button>
      )}
    </Paper>
  );
};

export default ParkingSlot;
