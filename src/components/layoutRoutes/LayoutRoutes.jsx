import { Outlet } from "react-router";
import { useOverflow } from "../../contexts";
import Entry from "../entry/Entry";
import Footer from "../footer/Footer";

function LayoutRoutes() {
  const { overflow } = useOverflow();

  return (
    <section
      className={`flex flex-col relative justify-between transition-colors duration-500 bottom-0 min-h-screen`}
    >
      {overflow && (
        <div className="bg-[#0000001a] h-screen top-[6rem] fixed left-0 w-full transition-colors duration-500"></div>
      )}
      <Entry />
      <Outlet />
      <Footer />
    </section>
  );
}

export default LayoutRoutes;
