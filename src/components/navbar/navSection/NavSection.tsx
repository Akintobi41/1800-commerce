import { useAppDispatch, useAppSelector } from "@hooks/useAppStore";
import { showEntry } from "@store/accountSlice";
import { selectAuthStatus } from "@store/loginSlice";
import { NavList, navList } from "@utils/constants";
import { Dispatch, FC, SetStateAction } from "react";
import { useNavigate } from "react-router";

interface navSectionProps{ 
  setMenuToggle : Dispatch<SetStateAction<boolean>>
}
const NavSection : FC <navSectionProps> =({ setMenuToggle })=> {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector(selectAuthStatus)

  function handleNavigation(list: string, i: number) {
    setMenuToggle(false);
    if (i < 4) navigate(`/${navList[list as keyof NavList]}`);
    else if (i === 4) {
      dispatch(showEntry(i)); // open modal with either sign in or sign up
    } else {
      navigate("/signup");
    }
  }

  return (
    <div className="lg:flex gap-x-4 lg:h-[85%] items-end">
      {Object.keys(navList).map((list, i) => (
        <section
          key={list}
          className={`flex w-full decoration-[none] text-[1.5rem] font-medium list-none ${
            i > 0 && i < 4 ? "" : "lg:hidden"
          } cursor-pointer py-2 px-4 decoration-none border-b border-solid border-[#061A40] lg:text-xl lg:border-0 lg:p-0 lg:mr-6 hover:bg-[var(--black)] lg:hover:bg-[unset]  hover:text-[var(--white)] lg:hover:text-[var(--pry-col)] ${
            i === 4 && "mt-20"
          } ${i >= 4 && isAuthenticated ? "hidden" : ""}`}
          onClick={() => {
            handleNavigation(list, i);
          }}
        >
          {list}
        </section>
      ))}
    </div>
  );
}

export default NavSection;
