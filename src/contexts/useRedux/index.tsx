import { IChild } from "@src/tsTypes/react-types";
import store from "@store/index";
import { FC } from "react";
import { Provider } from "react-redux";

export const ReduxProvider: FC<IChild> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};
