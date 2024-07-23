import { MainContent as MainContentType } from '@/types/types';
import styles from '@/components/styles/mainContent.module.scss';
import Carousel from '../../ui/Carousel';
import { Box, Button } from '@mui/material';

interface Props {
  data: MainContentType;
}

const MainContent = ( {data}:Props ) => {
  return (
    <Box className={styles['main-content']}>
      <Box className={styles['promo-space']}>
        <Box className={styles['left-section']}>
          <Box className={styles['promo-img-space']}></Box>
          <Box className={styles['promoDescription_position']}>
            <Box className={styles['promo-title']}>
              <h4>{data.promoSpace.promoTitle}</h4>
            </Box>
            <Box className={styles['promo-description']}>
              <p>{data.promoSpace.promoDescription}</p>
            </Box>
          </Box>
        </Box>
        <Button sx={{display:"block"}}>{data.promoSpace.promoButton}</Button>
      </Box>
      <Box className={styles['carousel']}>
        <Carousel carousel={data.carousel} promoSpace={data.promoSpace} />
      </Box>
    </Box>
  );
};

export default MainContent;
