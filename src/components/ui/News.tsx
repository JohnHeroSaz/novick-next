import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MainContent } from '../../types/types';
import styles from '../styles/swiper.module.scss';
import Image from 'next/image';

// Required modules
import { Navigation } from 'swiper/modules';
import { Button } from '@mui/material';

const Carousel = (data: MainContent) => {
  return (
    <>
      <Swiper
        slidesPerView={1}  
        cssMode={true}
        navigation={true}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        keyboard={true}
        modules={[ Navigation ]}
        className={styles.swiper}
      >
        {data.news?.map((data, index) => {
          return (
            <>
              <SwiperSlide key={index} className={styles['swiper-slide']}>
                <Image priority={true} src={data.imageUrl} alt="" width={600} height={600} className={styles['swiper-img']}/>
                {/* <Button href={data.ctaUrl} variant='contained' sx={{ marginTop: "20rem", position:"absolute" }}>Call to action</Button> */}
              </SwiperSlide>
            </>
          )
        })
      }
      </Swiper>
    </>
  );
}

export default Carousel;
