import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const navigate = useNavigate();

  const { state } = useContext(AppContext);
  const { dispatch } = useContext(AppContext);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Paper
        elevation={24}
        component="form"
        onSubmit={(event: React.SyntheticEvent) => {
          event.preventDefault();
          navigate("/parkingSpace");
        }}
        sx={{
          bgcolor: "lightgray",
          height: "200px",
          width: "300px",
          padding: "1rem",
          display: "flex",
          justifyContent: "Center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typography
          bgcolor="black"
          color="#fff"
          p="1rem 2rem"
          borderRadius="5px"
        >
          PARKING LOT MANAGER
        </Typography>
        <TextField
          id="parking-create-text-input"
          variant="outlined"
          label="Enter Parking Lot Space"
          value={state.parkingSpaceCount}
          type="number"
          InputProps={{ inputProps: { min: 1 } }}
          required
          // InputProps={{ inputProps: { min: 1 } }}
          onChange={(e) =>
            dispatch({
              type: "PARKING_SPACE",
              payload: e.target.value,
            })
          }
        />
        <Box display="flex" justifyContent="center">
          <Button id="parking-create-submit-button" type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Home;
