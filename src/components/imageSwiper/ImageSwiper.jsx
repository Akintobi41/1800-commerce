import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './s_imageSwiper.css'
import LoadingAnimation from './../loadingAnimation/Loader';

const ImageSwiper = ({ images }) => {
  console.log(images)
  return (
    <>
      {images.length > 0 ?
        (<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <>
          {[...images]?.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='bg-[#f3f4f64f]'>
                <img src={image?.fields.file.url} alt={`Slide ${index}`} style={{ width: '100%', height: '100%' }} className="max-w-[800px] mx-auto" loading="lazy" />
              </div>
       
            </SwiperSlide>
          ))}
        </>
      </Swiper>)
      : <LoadingAnimation/>}
</>

  );
};

export default ImageSwiper;
