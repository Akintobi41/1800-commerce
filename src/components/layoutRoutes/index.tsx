import Entry from "@components/entry";
import Footer from "@components/footer";
import { useStoreContext } from "@contexts/useContext";
import { Outlet } from "react-router";

function LayoutRoutes() {
  const { overflow } = useStoreContext();

  return (
    <section
      data-testid="layout-routes"
      className={`flex flex-col relative justify-between transition-colors duration-500 bottom-0 min-h-screen`}
    >
      <div>
        {overflow && (
          <div
            data-testid="overlay"
            className="z-10 bg-[#0000001a] h-screen top-[6rem] fixed left-0 w-full transition-colors duration-500"
          ></div>
        )}
      </div>
      <Entry />
      <Outlet />
      <Footer />
    </section>
  );
}

export default LayoutRoutes;
