import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

import Home from "./pages/Home";
import ParkingSpace from "./pages/ParkingSpace";
// testing git command
const App = () => {
  return (
    <AppProvider>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parkingSpace" element={<ParkingSpace />} />
          </Routes>
        </BrowserRouter>
      </>
    </AppProvider>
  );
};

export default App;
