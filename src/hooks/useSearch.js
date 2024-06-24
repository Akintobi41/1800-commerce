import { useEffect , useRef} from "react"

const useSearch = (search,setSearch) => { 
  const navMenu = useRef()

    useEffect(() => { 
        document.addEventListener("mousedown", clearMenu);
        return () => {
          document.removeEventListener("mousedown", clearMenu);
        };
    }, [search])
    
    function clearMenu(e) { 
        if (
          search &&
          !navMenu.current?.contains(e.target)
        ) {
          setSearch(false);
        }
    }
    return{navMenu}
}

export default useSearch;