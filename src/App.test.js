import { fireEvent, render, screen } from "@testing-library/react";

import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";
import ParkingSlot from "./components/ParkingSlot";
import PaymentModal from "./components/PaymentModal";
import RightBar from "./components/RightBar";
import { AppContext } from "./context/AppContext";
import Home from "./pages/Home";
import ParkingSpace from "./pages/ParkingSpace";

describe("... APP COMPONENT", () => {
  test("...RENDER APP COMPONENT", () => {
    render(<App />);
  });
});

describe("...INDEX FILE", () => {
  test("...RENDER INDEX FILE", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require("./index.tsx");
  });
});

const initState = {
  parkingSpaceCount: "1",
  carNumber: "",
  carDetails: [],
  currentCarDetails: {},
  showSnackbar: false,
  showModal: false,
  totalPrice: 0,
};
const state = initState
const dispatch = jest.fn()

describe("... PAGES", () => {
  test("...RENDER HOME ", () => {

    render(
      <AppContext.Provider value={{ state  , dispatch }}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </AppContext.Provider>
    );
  });

  test("...RENDER PARKING SPACE", () => {
    render(
      <AppContext.Provider value={{ state , dispatch }}>
        <ParkingSpace />
      </AppContext.Provider>
    );
  });
});

describe("...RENDER COMPONENTS", () => {
  test("...RENDER PARKINGSLOT", () => {
    render(
      <AppContext.Provider value={{ state , dispatch }}>
        <ParkingSlot occupied={true} slotNo={5} />
      </AppContext.Provider>
    );
    const ExitBtn = screen.getByTestId("exitBtn");
    fireEvent.click(ExitBtn);
  });

  test("...RENDER PAYMENT MODAL", () => {
    render(
      <AppContext.Provider value={{ state , dispatch }}>
        <PaymentModal />
      </AppContext.Provider>
    );
  });

  const handleSubmit = jest.fn();

  test("...RENDER RIGHTBAR", () => {
    render(
      <AppContext.Provider value={{ state , dispatch }}>
        <RightBar handleSubmit={handleSubmit} />
      </AppContext.Provider>
    );
  });
});

// describe("res API", () => {
//   test("car",async () => {
//     const res = Promise.resolve({ data: { "car-registration": "afsgh", "charge": "10" } })
//     axios.post.mockImplementationOnce(() => res)
//     render(
//       <PaymentModal />
//     )
//     await act(() => res)
//    })
//  })
