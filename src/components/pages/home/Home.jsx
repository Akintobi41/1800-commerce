/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "../../../appwrite/auth/auth";
import { signIn } from "../../../store/loginSlice";
import HomeComponents from "./HomeComponents";
import { useOverflow } from "../../../contexts";
import FeatureBanner from './../../banner/FeatureBanner';

const Home = () => {
  const { overflow } = useOverflow();
  const dispatch = useDispatch();
  const loggedIn = useSelector(
    (state) => state.auth.status
  );

  useEffect(() => {
    async function getUser() {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(signIn({ userData }));
        }
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, [loggedIn]);// added dependency because of getting the name of the user immediately you sign in

  return (
    <section
      className={`flex flex-col`}
    >
      <FeatureBanner />
      <section className="max-w-[1500px] mx-auto w-full">
        <HomeComponents />
      </section>
    </section>
  );
};

export default Home;
