import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { showEntry } from "../../../store/accountSlice";
import { navList } from "../navList";

function NavSection({ setMenuToggle }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector(
    (state) => state.auth.status
  );

  function handleNavigation(list, i) {
    setMenuToggle(false);
    if (i < 4) navigate(`/${navList[list]}`);
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
          } cursor-pointer py-2 px-4 decoration-none border-b border-solid border-[#061A40] lg:text-[1.2rem] lg:border-0 lg:p-0 lg:ml-[1rem] hover:bg-[var(--black)] lg:hover:bg-[unset]  hover:text-[var(--white)] lg:hover:text-[var(--pry-col)] ${
            i === 4 && "mt-20"
          } ${i >= 4 && loggedIn ? "hidden" : ""}`}
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
