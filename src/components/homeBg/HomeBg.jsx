import BgImg from '../bgImage/BgImg'
import logo1 from '../../assets/Images/bg-1A.jpg'
import logo2 from '../../assets/Images/bg-1B.jpg'
import logo3 from '../../assets/Images/bg-1C.jpg'

function HomeBg() {

    const images = [
        "../../assets/Images/bg-1A.jpg",
        "../../assets/Images/bg-1C.jpg",
        '../../assets/Images/bg-1B.jpg'
    ];
    
    const [img1, img2, img3] = images;
    return (
        <>
            <BgImg img={logo1} i={0} />
            <BgImg img={logo3} i={1} />
            <BgImg img={logo2} i={2} />
           
        </>
       
    )
}

export default HomeBg