import { navList } from "@components/navbar/navList";
import SignOutBtn from "@components/signOutBtn/SignOutBtn";
import { useOverflow } from "@contexts";
import AccountIcon from "@icons/AccountIcon";
import { showEntry } from "@store/accountSlice";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

function OpenAccountModal() {

  const { overflow, setOverflow } = useOverflow();
  const navMenu = useRef();
  const dispatch = useDispatch();
  const { name } =
    useSelector((state) => state.auth?.userData) || {};
  const loggedIn = useSelector(
    (state) => state.auth.status
  );
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("mousedown", clearMenu);
    return () => {
      document.removeEventListener("mousedown", clearMenu);
    };
  }, [overflow]);


  function clearMenu(e) {
    if (
      overflow &&
      navMenu.current &&
      !navMenu.current?.contains(e.target)
    ) {
      setOverflow(false);
    }
  }


  return (
    <div ref={navMenu}>
      <div className="flex items-center justify-center">
        {" "}
        {loggedIn ? (
          <p className="ml-2 text-[.75rem] font-medium hidden lg:block">
            Hi,{name}
          </p>
        ) : null}
        <AccountIcon
          styles={`hidden lg:block ml-4 mr-2 ${
            !loggedIn ? "" : null
          }`}
          onClick={() => setOverflow(!overflow)}
        />
      </div>

      <div
        className={`${
          overflow
            ? "opacity-100 transition-opacity duration-300 visible"
            : "opacity-0 transition-opacity duration-300 invisible"
        } flex flex-col absolute top-full bg-[var(--white)] right-[50px] w-32 h-28 p-6 text-sm `}
      >
        <p
          data-testid="account-section"
          className="opacity-40 text-left"
        >
          Account
        </p>
        {!loggedIn ? (
          Object.keys(navList).map((item, i) => (
            <section
              data-testid={item}
              key={item}
              className={`cursor-pointer text-left w-[63%] ${
                i > 3 ? "" : "hidden"
              } mt-2`}
              onClick={() => {
                setOverflow(false);
                if (i === 4) {
                  dispatch(showEntry(i)); // open modal with either sign in or sign up
                } else {
                  navigate("/signup");
                }
              }}
            >
              {" "}
              {i > 3 ? item : ""}
            </section>
          ))
        ) : (
          <SignOutBtn />
        )}
      </div>
    </div>
  );
}
export default OpenAccountModal;
