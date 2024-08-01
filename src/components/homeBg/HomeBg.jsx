import BgImg from '../bgImage/BgImg'

function HomeBg() {

    const images = [
        "src/assets/Images/bg-1A.jpg",
        "src/assets/Images/bg-1C.jpg",
        "src/assets/Images/bg-1B.jpg",
      ];
    const [img1, img2, img3] = images;
    return (
        <>
            <BgImg img={img1} i={0} />
            <BgImg img={img2} i={1} />
            <BgImg img={img3} i={2} />
           
        </>
       
    )
}

export default HomeBg