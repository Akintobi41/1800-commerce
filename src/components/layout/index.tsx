import Header from "@components/header";
import LayoutRoutes from "@components/layoutRoutes";
import Scroll from "@components/scrollToTop";
import useAuth from "@hooks/useAuth";
import { FC } from "react";

const Layout: FC = () => {
  useAuth();

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
};

export default Layout;
