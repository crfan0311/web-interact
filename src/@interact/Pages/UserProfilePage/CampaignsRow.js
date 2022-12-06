import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import {Navigation} from  'swiper'
import CampaignSnippet from '@interact/Components/CampaignSnippet/CampaignSnippet';

function CampaignsRow({currentCampaigns, heading}) {

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
    <div style={{position:"relative"}}>
    <div style={{ marginLeft: 20, textDecorationLine: "underline" }}>
      {heading}
    </div>
      <Swiper
      breakpoints={{
        280: {
          slidesPerView: 1,
        },
        940: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
      slidesPerView={4}
      modules={[Navigation]}
      navigation={{
        prevEl: prevRef?.current,
        nextEl: nextRef?.current
      }}
      updateOnWindowResize
      observer
      observeParents
      onSwiper={setSwiper}>
      {currentCampaigns.map((x, i) => (
        <SwiperSlide key={i}>
          <CampaignSnippet info={x} />
        </SwiperSlide>
      ))}
      </Swiper>
      <div className="swiper-button swiper-button-prev" ref={prevRef}></div>
      <div className="swiper-button swiper-button-next" ref={nextRef}></div>
    <br />
  </div>
  )
}

export default CampaignsRow