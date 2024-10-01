import { useAppDispatch, useAppSelector } from "@hooks/useAppStore";
import { accessID, accessStatus, closeEntry } from "@store/accountSlice";
import { useEffect, useRef } from "react";
import SignIn from '@components/pages/signIn';



function Entry() {
  const status = useAppSelector(accessStatus)
  const id = useAppSelector(accessID)
  const entryMenu = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    body.style.overflow = status ? "hidden" : "auto";
  }, [status]);

  const closeMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === entryMenu.current) {
      dispatch(closeEntry());
    }
  };

  const modalClassName = status 
    ? "opacity-100 visible h-[100%] fixed w-full transition-all duration-[1s] bottom-0" 
    : "opacity-0 invisible";

  return (
    <div
      data-testid="access"
      className={`z-40 overflow-hidden bg-[rgba(128,128,128,0.9)] ${modalClassName}`}
      onClick={closeMenu}
      ref={entryMenu}
    >
      {id === 4 ? <SignIn  /> : null}
    </div>
  );
}

export default Entry;
