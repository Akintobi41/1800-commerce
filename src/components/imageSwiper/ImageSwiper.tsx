import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LoadingAnimation from "@components/loadingAnimation/Loader";
import "./s_imageSwiper.css";

const ImageSwiper = ({ images }) => {
  
  return (
    <div className="min-h-[300px] sm:min-h-[400px]">

      {images?.length > 0 ? (

        <Swiper
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
          className="max-w-[700px] mx-auto min-h-[300px] sm:min-h-[500px] bg-gray-100 mb-8"
        >
          <>
            {[...images]?.map((image, index) => {
              const imageUrl = image?.fields?.file?.url || 'https://miro.medium.com/v2/resize:fit:640/format:webp/0*mv8MNRLDNNnt5f72.gif'; // Fallback image or URL
              
              return (<SwiperSlide data-testid='swiper-slide' key={index}>
                <div className="bg-[#f3f4f64f]">
                  <img
                    src={imageUrl}
                    alt={`Slide ${index}`}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    className="max-w-[800px] mx-auto"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            )})}
          </>
        </Swiper>
      ) : (
        <LoadingAnimation />
      )}
    </div>
  );
};

export default ImageSwiper;
