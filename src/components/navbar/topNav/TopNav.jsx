import { lazy } from "react";
import { useSelector } from "react-redux";
const SignOutBtn = lazy(() =>
  import("../../signOutBtn/SignOutBtn")
);

function TopNav({ menuToggle, section }) {
  const loggedIn = useSelector(
    (state) => state.auth.status
  );
  const { name } =
    useSelector((state) => state.auth?.userData) || {};

  return (
    <nav
      data-testid = 'nav'
      className={`${
        menuToggle
          ? "flex flex-col fixed left-0 items-start z-10 transition-all duration-[.5s] w-full h-full top-[5.8rem] bg-[var(--pry-col)] lg:w-0"
          : "hidden lg:flex flex-col lg:relative fixed left-0 items-start w-full h-full lg:bg-transparent lg:translate-y-[0px] transition-all duration-[1s] lg:w-auto" //i removed z-10 from here , added it back and remove display of flex instead
      }`}
    >
      {loggedIn && (
        <p className="p-4 italic lg:hidden">Hi, {name}</p>
      )}
      <ul className="flex flex-col mt-10 w-full lg:mt-0 h-full lg:w-[30%] lg:flex-row z-30 lg:gap-8">
        {section}
        {loggedIn && <SignOutBtn className="lg:hidden" />}
      </ul>
    </nav>
  );
}

export default TopNav;
