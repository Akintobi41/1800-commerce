/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "../../appwrite/auth/auth";
import { signIn } from "../../store/loginSlice";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import HeaderText from "../headerText/HeaderText";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import Scroll from "../scrollToTop/Scroll";
import LayoutRoutes from "./../layoutRoutes/LayoutRoutes";

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
        console.log(error);
      }
    }
    getUser();
  }, [loggedIn]); // added dependency because of getting the name of the user immediately you sign in

  return (
    <>
      <Scroll />
      <main className="flex flex-col relative h-full min-h-screen my-0 w-full overflow-hidden">
        <section className="relative min-h-screen">
          <Header
            Navbar={
              <Navbar
                Logo={
                  <Logo
                    font_style={
                      "md:ml-10 text-[3rem] text-center lg:w-[20%] hover:text-[var(--pry-col)]"
                    }
                  />
                }
              />
            }
            Text={<HeaderText />}
          />
          <LayoutRoutes />
        </section>
      </main>
    </>
  );
}

export default Layout;
