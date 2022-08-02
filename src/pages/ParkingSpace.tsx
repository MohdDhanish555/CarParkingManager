import { Alert, Box, Snackbar } from "@mui/material";
import { useContext } from "react";

import ParkingSlot from "../components/ParkingSlot";
import RightBar from "../components/RightBar";

import { AppContext } from "../context/AppContext";
import { CarDetailsType } from "../types";
import PaymentModal from "../components/PaymentModal";

const ParkingSpace = () => {
  const { state } = useContext(AppContext);
  const { dispatch } = useContext(AppContext);

  const handleSnackbarClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({
      type: "SHOW_SNACKBAR",
      payload: false,
    });
  };

  const slots = [];
  const spaces = parseInt(state?.parkingSpaceCount);
  for (let i = 1; i <= spaces; i++) {
    slots.push(
      <ParkingSlot
        slotNo={i}
        key={i}
        occupied={state?.carDetails?.find((car: CarDetailsType) => i === car.slot)}
      />
    );
  }


  return (
    <Box
      display="flex"
      justifyContent="flexStart"
      gap="2rem"
      flexWrap="wrap"
      p="2rem"
    >
      {slots}
      <RightBar />
      <PaymentModal />
      <Snackbar
        open={state.showSnackbar}
        message="PARKING FULL"
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
      >
        <Alert elevation={6} variant="filled" severity="error">
          PARKING FULL
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ParkingSpace;
