import { useState } from "react";


const useTheContext = () => { 
      
    const [cart, setCart] = useState(0);


    return {cart,setCart}
}
  
export default useTheContext;