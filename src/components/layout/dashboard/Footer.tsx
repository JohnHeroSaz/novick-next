import { Footer as FooterType } from '@/types/types';
import styles from '@/components/styles/footer.module.scss';
import { Box } from '@mui/material';

interface FooterProps {
  data: FooterType;
}

const Footer = ({ data }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <Box className={styles.logo}>
        <img src={data.logoImage} alt="Logo" />
      </Box>
      <Box className={styles.footerContainer}>
        <Box className={styles['terms-and-privacy']}>
          <a href={data.termsAndPrivacyLink.url}>{data.termsAndPrivacyLink.text}</a>
          <>|</>
        </Box>
        <Box className={styles.copyright}>
          <p>{data.copyright}</p>
        </Box>
      </Box>

    </footer>
  );
};

export default Footer;
