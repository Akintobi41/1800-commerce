import LoadingAnimation from "@components/loadingAnimation";
import NavSection from "@components/navbar/navSection/NavSection";
import { useAppSelector } from "@hooks/useAppStore";
import { selectAuthStatus, selectUserData } from "@store/loginSlice";
import { Dispatch, FC, lazy, SetStateAction, Suspense } from "react";

const SignOutBtn = lazy(
  () => import("@components/signOutBtn")
);

interface TNavProps { 
  menuToggle: boolean
  setMenuToggle: Dispatch<SetStateAction<boolean>>
}

const TopNav: FC <TNavProps> = ({ menuToggle, setMenuToggle })=> {

  const isAuthenticated = useAppSelector(selectAuthStatus);
  const { name } =
    useAppSelector(selectUserData) || {};


  return (
    <nav
      data-testid="nav"
      className={`${
        menuToggle
          ? "flex flex-col overflow-hidden fixed left-0 items-start z-10 transition-all duration-[.5s] w-full h-full top-[5.8rem] bg-[var(--pry-col)] lg:w-0"
          : "hidden lg:flex flex-col lg:relative fixed left-0 items-start w-full h-full lg:bg-transparent lg:translate-y-[0px] transition-all duration-[1s] lg:w-auto" 
      }`}
    >
      {isAuthenticated && (
        <p className="p-4 italic lg:hidden">Hi, {name}</p>
      )}
      <ul className="flex flex-col mt-10 w-full lg:mt-0 h-full lg:w-[30%] lg:flex-row z-30 lg:gap-8">
       <NavSection setMenuToggle={setMenuToggle}/>
        {isAuthenticated && (
          <Suspense fallback={<LoadingAnimation />}>
            {" "}
            <SignOutBtn className="lg:hidden" />
          </Suspense>
        )}
      </ul>
    </nav>
  );
}

export default TopNav;
