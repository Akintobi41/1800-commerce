import Button from "./../reusables/button/Button";
import authService from "../../appwrite/auth/auth";
import { signOut } from "../../store/loginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect, useState } from 'react';

function SignOutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  async function deleteUser() {
    try {
      await authService.logout().then(() => {
        setModal(true)
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => { 
    if (modal) { 
      setTimeout(() => {  
        dispatch(signOut());   
        setModal(false)
        navigate('/');
      }, 3000);
    }
  }, [modal])


  return (
    <>
      <div className={`${modal ? ' w-full flex fixed justify-center items-center top-0 left -0 min-h-screen bg-[var(--white)]' : 'hidden'}`}>
        <p className="text-center text-[1.5rem] transition-all duration-500"> Signing Out...</p>
      </div>
        <Button
      styles="mt-3 rounded p-2 text-[2rem] font-semibold lg:text-left lg:text-[1rem] lg:font-normal lg:p-0 "
      onClick={deleteUser}
    >
      {" "}
      Sign Out{" "}
    </Button>
    </>
  
  );
}
export default SignOutBtn;
