
import Entry from "../entry/Entry"
import { Outlet } from "react-router"
import { useOverflow } from "../../contexts"


function LayoutRoutes() {
  const { overflow } = useOverflow();

  console.log('layout routes')

    return (
        <section className={`flex flex-col relative transition-colors duration-500`}>
            {overflow && <div className="bg-[#0000001a] h-screen top-[6rem] fixed left-0 w-full transition-colors duration-500"></div>}
      <Entry/>
      <Outlet />
    </section>
  )
}

export default LayoutRoutes