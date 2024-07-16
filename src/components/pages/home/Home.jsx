/* eslint-disable react-hooks/exhaustive-deps */
import ProductSlider from "../../../components/productSlider/ProductSlider";
import Trending from "../../../components/Trending/Trending";
import About from "../../../components/about/About";
import Patronize from "../../../components/patronize/Patronize";
import Subscribe from "../../../components/subscribe/Subscribe";
import ReachOut from "../../../components/reachOut/ReachOut";
import Slider from './../../slider/Slider';
import { useEffect } from "react";
import authService from "../../../appwrite/auth/auth";
import { useDispatch } from "react-redux";
import { signIn } from "../../../store/loginSlice";
import { useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.status);

  console.log(loggedIn)

  useEffect(() => {
    async function getUser() {
      try {
        const userData = await authService.getCurrentUser();
        console.log(userData)
        if (userData) {
          dispatch(signIn({ userData }))
        }
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  }, [loggedIn])

// added dependency because of getting the name of the user immediately you sign in
  
  return (
    <>
    <Slider/>
    <section className="max-w-[1500px] mx-auto w-full">
      <ProductSlider />
      <Trending />
      <About />
      <Patronize />
      <Subscribe />
      <ReachOut />
    </section>
    </>
    
  );
};

export default Home;
