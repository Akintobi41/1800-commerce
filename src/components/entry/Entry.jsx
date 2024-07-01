import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import { useOverflow } from "../../contexts";
import { useEffect, useRef } from "react";

function Entry() {
  const { account, setAccount } = useOverflow();
  const entryMenu = useRef();

  useEffect(() => {
    account.state
      ? (document.querySelector("body").style.overflow =
          "hidden")
      : (document.querySelector("body").style.overflow =
          "auto");
  }, [account]);

  function closeMenu(e) {
    if (e.target.nodeName === "DIV")
      setAccount({ ...account, state: false });

    console.log('DIVVVVV')
  }
  console.log('njfg')

  return (
    <div
      className={`z-40 ${
        account.state
          ? "opacity-100 visible h-[100%] fixed w-full transition-all duration-[1s] bottom-0"
          : ""
      } bg-[rgba(128,128,128,0.7)]`}
      onClick={closeMenu}
      ref={entryMenu}
    >
      {account.id === 4 ? (
        <SignIn />
      ) : account.id === 5 ? (
        <SignUp />
      ) : null}
    </div>
  );
}

export default Entry;
