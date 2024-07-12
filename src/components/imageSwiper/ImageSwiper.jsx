import { register } from "swiper/element";
import { useEffect} from "react";

const ImageSwiper = ({ images }) => {
  register();
  useEffect(() => {
    const swiperEl = document.querySelector('swiper-container');

    swiperEl.addEventListener('swiperprogress', (event) => {
      const [swiper, progress] = event.detail;
      // console.log(swiper)
    
    });

    swiperEl.addEventListener('swiperslidechange', (event) => {
      // console.log('slide changed');
    });
    // console.log(swiperEl)
  }, []);

  return (
    <swiper-container
      slides-per-view="1"
      grid-rows="3"
      mousewheel-force-to-axis="true"
    > 
       { images ?  [...images]?.map((image, index) => (
        <swiper-slide key={index} lazy='true'>
          <img src={image?.fields.file.url} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} loading="lazy"/>
        </swiper-slide>
       )) : null}
      
      {/* Error Message needed when images/product is loading */}

    </swiper-container>
  );
};

export default ImageSwiper;
