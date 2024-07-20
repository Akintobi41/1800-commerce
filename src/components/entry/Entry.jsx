import { useEffect, useRef } from "react";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import { useSelector, useDispatch } from "react-redux";
import { closeEntry } from "../../store/accountSlice";

function Entry() {
  // const { account, setAccount } = useOverflow();
  const access = useSelector((state) => state.access)
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
    if (e.target.nodeName === "DIV") {
      console.log(e.target.nodeName)
    dispatch(closeEntry())
    }
      

  }

  return (
    <div
      className={`z-40 ${
        access.status
          ? "opacity-100 visible h-[100%] fixed w-full transition-all duration-[1s] bottom-0"
          : "opacity-0 invisible"
      } bg-[rgba(128,128,128,0.9)]`}
      onClick={closeMenu}
      ref={entryMenu}
    >
      {id === 4 ? (
        <SignIn
          id={5}
        />
      ) : id === 5 ? (
        <SignUp id={4}/>
      ) : null}
    </div>
  );
}
export default Entry;
