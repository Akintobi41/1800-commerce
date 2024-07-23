/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "../../../appwrite/auth/auth";
import { signIn } from "../../../store/loginSlice";
import Slider from './../../slider/Slider';
import HomeComponents from './HomeComponents';

const Home = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.status);

  useEffect(() => {
    async function getUser() {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(signIn({ userData }))
        }
      } catch (error) {
        console.log(error)
      }
    }
    getUser();
  }, [loggedIn])
console.log('this is home')
// added dependency because of getting the name of the user immediately you sign in
  
  return (
    <>
    <Slider/>
    <section className="max-w-[1500px] mx-auto w-full">
     <HomeComponents/>
    </section>
    </>
    
  );
};

export default Home;
