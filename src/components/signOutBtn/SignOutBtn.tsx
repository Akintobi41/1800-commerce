import authService from "@appwrite/auth/auth";
import { useStoreContext } from "@contexts/useContext";
import Button from "@reusables/button/Button";
import { signOut } from "@store/loginSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function SignOutBtn({ className }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const { setOverflow } = useStoreContext();

  async function deleteUser() {
    setModal(true);
    try {
      await authService.logout().then(() => {
        dispatch(signOut());
        setModal(false);
        setOverflow(false);
        navigate("/");
      });
    } catch (error) {
      setModal(false);
      throw new Error(error);
    }
  }

  return (
    <>
      <div
        className={`${
          modal
            ? " w-full flex fixed justify-center items-center top-0 left-0 min-h-screen bg-[var(--white)] z-40"
            : "hidden"
        }`}
      >
        <p className="text-center text-[1.5rem] transition-all duration-500">
          {" "}
          Signing Out...
        </p>
      </div>
      <Button
        aria-label="sign-out-button"
        styles={`mt-3 rounded p-2 text-[2rem] ${className} font-semibold lg:text-left lg:text-[1rem] lg:font-normal lg:p-0 `}
        onClick={deleteUser}
      >
        {" "}
        Sign Out{" "}
      </Button>
    </>
  );
}
export default SignOutBtn;
