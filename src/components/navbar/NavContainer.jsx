import Navbar from './Navbar'
import Scroll from '../scrollToTop/Scroll'
import Logo from '../logo/Logo'
import { useEffect, useState } from 'react'

function NavContainer() {
    const [menuToggle, setMenuToggle] = useState(false)
    

    useEffect(() => { 
        
    })
  return (
      <>
          <Scroll />
      <Navbar Logo={<Logo />} />
          
</>
      
  )
}

export default NavContainer