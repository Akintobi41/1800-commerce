import { useEffect } from "react";

const useOverflow = (menuToggle)=> { 
    useEffect(()=> { 
        menuToggle ? document.querySelector('body').classList.add('overflow-y-hidden') : 
        document.querySelector('body').classList.remove('overflow-y-hidden') 
    },[menuToggle])
}

export default useOverflow