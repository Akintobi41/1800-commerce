/* eslint-disable react/prop-types */
import authService from "@appwrite/auth/auth";
import Header from "@components/header/Header";
import LayoutRoutes from "@components/layoutRoutes/LayoutRoutes";
import Scroll from "@components/scrollToTop/Scroll";
import { signIn } from "@store/loginSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Layout() {
  const loggedIn = useSelector(
    (state) => state.auth.status
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function getUser() {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(signIn({ userData }));
        }
      } catch (error) {
      throw new Error(error)
      }
    }
    getUser();
  }, [loggedIn]); // added dependency because of getting the name of the user immediately you sign in

  return (
    <>
      <Scroll />
      <main className="flex flex-col relative h-full min-h-screen my-0 w-full overflow-hidden">
        <section className="relative">
          <Header />
          <LayoutRoutes />
        </section>
      </main>
    </>
  );
}

export default Layout;
