/* eslint-disable react/prop-types */
import { useState } from "react";
import SearchIcon from "./../../assets/Icons/SearchIcon";
import NavMenu from './NavMenu';
import OpenAccountModal from "../openAccountModal/OpenAccountModal";
import useSearch from './../../hooks/useSearch';
import Input from "../reusables/input/Input";

const Navbar = ({Logo}) => {
  const [search, setSearch] = useState(false);
  const { navMenu } = useSearch(search, setSearch);
  
  return (
    <section className="flex relative bg-[var(--white)] p-4 md:pl-0 h-16 border-t-[1px] max-w-[1500px] mx-auto">
    <>
    <section
    className={`w-full absolute left-0 mt-10 pt-2 px-6 pb-0 bg-[var(--white)] ${search ? "block opacity-100 z-10" : 'hidden opacity-0' }`}>
          <Input type="search"
      name="search" 
      styles={`${
        search
          ? "w-full transition-all duration-[.5s]  appearance-none border-0 pt-4 pr-0 pb-0 pl-16 border-b-[1px] border-[var(--black)] outline-none"
          : "translate-y-[-400px]"
      }`}
      placeholder="SEARCH" />
    <SearchIcon search={search} setSearch={setSearch} top={'-top-[30px]'}/> 
    </section>
    <NavMenu Logo={Logo} SearchIcon={<SearchIcon search={search} setSearch={setSearch} refs={navMenu} style={'hover:stroke-[var(--pry-col)]'} />} modal={<OpenAccountModal/>}/>
    </>
    </section>
  );
};

export default Navbar;
