/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

const useResetSearchAndMenu = (
  setSearch,
  setMenuToggle
) => {
  useEffect(() => {
    setSearch(false);
    setMenuToggle(false);
  }, []);
};

export default useResetSearchAndMenu;
