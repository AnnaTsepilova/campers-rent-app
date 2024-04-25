import css from './Footer.module.css';
import styles from '../AppBar/AppBar.module.css';
import svgSprite from '../../img/icons.svg';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={`${css.footer_wrapper} container`}>
        <a
          href="./index.html"
          className={`${styles.logo} ${css.logo_footer}`}
          aria-label="Logo"
        >
          <svg width={32} height={32} className={css.logo_footer_svg}>
            <use href={`${svgSprite}#landscape`}></use>
          </svg>
          <div className={`${styles.slogan} ${css.slogan_footer}`}>
            <span className={styles.slogan_first}>
              Your <span>best</span>
            </span>
            <span className={styles.slogan_second}>
              {' '}
              camper <span>here</span>
            </span>
          </div>
        </a>

        <div>
          <p className={css.social_text}>Follow us</p>
          <ul className={css.social_list}>
            <li className={css.social_item}>
              <a
                href="/catalog"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="facebook"
                className={css.social_link}
              >
                <svg width={32} height={32} className={css.social_svg}>
                  <use href={`${svgSprite}#facebook`}></use>
                </svg>
              </a>
            </li>
            <li className={css.social_item}>
              <a
                href="/catalog"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
                className={css.social_link}
              >
                <svg width={32} height={32} className={css.social_svg}>
                  <use href={`${svgSprite}#instagram`}></use>
                </svg>
              </a>
            </li>
            <li className={css.social_item}>
              <a
                href="/catalog"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="youtube"
                className={css.social_link}
              >
                <svg width={32} height={32} className={css.social_svg}>
                  <use href={`${svgSprite}#youtube`}></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
