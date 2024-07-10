import { register } from "swiper/element";
import { useEffect } from "react";

const ImageSwiper = ({ images }) => {
  register();
  useEffect(() => {
    const swiperEl = document.querySelector('swiper-container');

    swiperEl.addEventListener('swiperprogress', (event) => {
      const [swiper, progress] = event.detail;
    });

    swiperEl.addEventListener('swiperslidechange', (event) => {
      console.log('slide changed');
    });
    console.log(swiperEl)
  }, []);

  return (
    <swiper-container
      slides-per-view="1"
      grid-rows="3"
      mousewheel-force-to-axis="true"
    > 
       {[...images].map((image, index) => (
        <swiper-slide key={index}>
          <img src={image?.fields.file.url} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
        </swiper-slide>
      ))}

    </swiper-container>
  );
};

export default ImageSwiper;
