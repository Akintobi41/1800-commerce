import logo1 from '../../assets/Images/bg-1A.jpg'
import logo2 from '../../assets/Images/bg-1B.jpg'
import logo3 from '../../assets/Images/bg-1C.jpg'
import BgImg from '../bgImage/BgImg'

function HomeBg() {
    
    return (
        <>
            <BgImg img={logo1} i={0} />
            <BgImg img={logo3} i={1} />
            <BgImg img={logo2} i={2} />
           
        </>
       
    )
}

export default HomeBg