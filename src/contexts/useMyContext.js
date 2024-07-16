import { useState } from "react";

const useMyContext = () => { 
    const [overflow, setOverflow] = useState(false);

    return{overflow,setOverflow}
}

export default useMyContext;

