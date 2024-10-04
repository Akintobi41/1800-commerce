import authService from "@appwrite/auth/auth";
import Button from "@components/reusables/button";
import { useStoreContext } from "@contexts/index";
import { useAppDispatch } from "@hooks/useAppStore";
import { signOut } from "@store/loginSlice";
import { useState } from "react";
import { useNavigate } from "react-router";


interface SignOutBtnProps {
  className?: string; 
}

const SignOutBtn: React.FC<SignOutBtnProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const { setOverflow } = useStoreContext();

  const deleteUser = async () => {
    setModal(true);
    try {
      await authService.logout();
      dispatch(signOut());
      setOverflow(false);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error); 
      setModal(false);
    }
  };

  return (
    <>
      {modal && (
        <div className="fixed flex justify-center items-center top-0 left-0 w-full min-h-screen bg-[var(--white)] z-40">
          <p className="text-center text-[1.5rem] transition-all duration-500">
            Signing Out...
          </p>
        </div>
      )}
      <Button
        aria-label="sign-out-button"
        styles={`mt-3 rounded p-2 text-[2rem] ${className} font-semibold lg:text-left lg:text-[1rem] lg:font-normal lg:p-0`}
        onClick={deleteUser}
      >
        Sign Out
      </Button>
    </>
  );
};

export default SignOutBtn;
