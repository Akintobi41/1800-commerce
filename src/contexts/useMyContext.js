import { useState } from "react";

const useMyContext = () => { 
    const [overflow, setOverflow] = useState(false);
    const [account, setAccount] = useState({state:false, id:null});

    return{overflow,setOverflow,account,setAccount}
}

export default useMyContext;

