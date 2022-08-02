import { Box, Button, Modal, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

function PaymentModal() {
  const { state } = useContext(AppContext);
  const { dispatch } = useContext(AppContext);

  let totalPrice = 0;
  let parkedTime = state.currentCarDetails[0]?.date;
  let timeDifference = Math.abs(new Date().getTime() - parkedTime?.getTime());
  let hours = Math.ceil(timeDifference / (1000 * 3600));

  if (hours < 1) {
    totalPrice = 10;
  } else {
    totalPrice = 10 + (hours - 1) * 10;
  }

  useEffect(() => {
    dispatch({
      type: "TOTAL_PRICE",
      payload: totalPrice,
    });
  }, [totalPrice , dispatch]);

  const handleModalClose = () => {
    dispatch({
      type: "SHOW_MODAL",
      payload: false,
    });
  };

  const handlePaymentClick = () => {
    axios.post("https://httpstat.us/200", {
      "car-registration" : state?.currentCarDetails[0]?.carNumber,
      "charge" : state?.totalPrice,
    }).then(res => console.log(res));

    dispatch({
      type: "DELETE_CAR_DETAILS",
      payload : state.currentCarDetails[0]?.slot
    })

    dispatch({
      type: "SHOW_MODAL",
      payload: false,
    });
  };

  return (
    <Modal
      id="deregister-car-registration"
      open={state.showModal}
      onClose={handleModalClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        bgcolor="white"
        width="300px"
        height="300px"
        borderRadius={"10px"}
        p="1rem"
      >
        <Typography variant="h5">
          {state?.currentCarDetails[0]?.carNumber}
        </Typography>
        <Typography>
           PARKED TIME : {(state?.currentCarDetails[0]?.date)?.toLocaleTimeString()}
        </Typography>
        <Typography variant="body2">PARKING CHARGE</Typography>
        <Typography id="deregister-charge" variant="h4" color="initial">
          ${totalPrice}
        </Typography>
        <Button id="deregister-back-button" variant="contained" onClick={handleModalClose}>
          Back
        </Button>
        <Button id="deregister-payment-button" variant="contained" onClick={handlePaymentClick}>
          Payment Taken
        </Button>
      </Box>
    </Modal>
  );
}

export default PaymentModal;
