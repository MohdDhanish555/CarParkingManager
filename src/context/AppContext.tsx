import { createContext, FC, useReducer } from "react";
import { AppContextType } from "../types";
import { initState, reducer } from "./reducer";

const defaultValue = {
  state: initState,
  dispatch: () => initState,
};

export const AppContext = createContext<AppContextType>(defaultValue);

type Props = {
  children: JSX.Element;
};

export const AppProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

