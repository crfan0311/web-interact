import React from 'react'
import { Navigation, Pagination, Scrollbar } from "swiper";
import {SwiperSlide,Swiper} from 'swiper/react';

function SwiperWrapper({children}) {

  const [swiper, setSwiper] = React.useState();
  const prevRef = React.useRef();
  const nextRef = React.useRef();

  React.useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <>
    <Swiper
    breakpoints={{
      280: {
        slidesPerView: 1,
      },
      940: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    }}
    slidesPerView={3}
    modules={[Navigation,Scrollbar]}
    navigation={{
      prevEl: prevRef?.current,
      nextEl: nextRef?.current
    }}
    updateOnWindowResize
    observer
    observeParents
    onSwiper={setSwiper}>
      {{children}}
    </Swiper>
    <div className="swiper-button swiper-button-prev" ref={prevRef}></div>
    <div className="swiper-button swiper-button-next" ref={nextRef}></div>
    </>
  )
}

export default SwiperWrapper