import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeEntry } from "@store/accountSlice";
import SignIn from "@components/pages/signIn/SignIn";


function Entry() {
  const access = useSelector((state) => state.access);
  const { id, status } = access;
  const entryMenu = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    status
      ? (document.querySelector("body").style.overflow =
          "hidden")
      : (document.querySelector("body").style.overflow =
          "auto");
  }, [status]);


  function closeMenu(e) {
    if (e.target.nodeName === "DIV") dispatch(closeEntry());
  }
  
  
  return (
    <div
      data-testid= 'access'
      className={`z-40 overflow-hidden ${
        access.status
          ? "opacity-100 visible h-[100%] fixed w-full transition-all duration-[1s] bottom-0"
          : "opacity-0 invisible"
      } bg-[rgba(128,128,128,0.9)]`}
      onClick={closeMenu}
      ref={entryMenu}
    >
      {id === 4 ? (
        <SignIn id={5} />
      ) :null}
    </div>
  );
}
export default Entry;
