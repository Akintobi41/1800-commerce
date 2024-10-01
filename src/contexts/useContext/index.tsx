import { IChild } from "@src/tsTypes/react-types";
import {
  createContext,
  FC,
  useContext,
  useState,
} from "react";

type StoreContext = {
  overflow: boolean;
  setOverflow: (id: boolean) => void;
};

const StoreContext = createContext({} as StoreContext);

export function useStoreContext() {
  return useContext(StoreContext);
}

export const StoreProvider: FC<IChild> = ({ children }) => {
  const [overflow, setOverflow] = useState(false);

  return (
    <StoreContext.Provider
      value={{ overflow, setOverflow }}
    >
      {children}
    </StoreContext.Provider>
  );
};
