import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import css from './ModalAdvert.module.css';
import style from '../AdvertItem/AdvertItem.module.css';
import svgSprite from '../../img/icons.svg';
import { NavLink } from 'react-router-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onModalClose, children }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onModalClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModalClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onModalClose();
    }
  };

  return createPortal(
    <div className={css.modal_overlay} onClick={handleBackdropClick}>
      <div className={css.modal_window}>
        <button className={css.modal_close_btn} type="button">
          <svg className={css.modal_close_icon} width={32} height={32}>
            <use href={`${svgSprite}#close-btn`}></use>
          </svg>
        </button>

        <div className={css.advert_info}>
          <div className={css.advert_title}>
            <h3 className={css.advert_name}>
              {/* {advert.name} */}
              Mavericks
            </h3>
            <div className={style.advert_subtitle}>
              <div className={style.advert_reviews}>
                <svg width={16} height={16}>
                  <use href={`${svgSprite}#star`}></use>
                </svg>
                <p>
                  {/* {advert.rating} */}({/* {advert.reviews.length} */}
                  Reviews)
                </p>
              </div>
              <div className={style.advert_location}>
                <svg width={16} height={16}>
                  <use href={`${svgSprite}#map-pin`}></use>
                </svg>
                <p>
                  {/* {advert.location} */}
                  Kyiv, Ukraine
                </p>
              </div>
            </div>
            <div className={css.advert_price}>
              <p>
                &#8364;
                {/* {advert.price} */}
                8000
              </p>
            </div>
          </div>
          <ul className={style.advertItem_gallery}>
            <li>
              <img
                className={style.advertItem_img}
                //   src={advert.gallery[0]} alt={advert.name}
                src="https://ftp.goit.study/img/campers-test-task/8-1.webp"
                alt="name"
                width={290}
              />
            </li>
            <li>
              <img
                className={style.advertItem_img}
                //   src={advert.gallery[0]} alt={advert.name}
                src="https://ftp.goit.study/img/campers-test-task/8-2.webp"
                alt="name"
                width={290}
              />
            </li>
            <li>
              <img
                className={style.advertItem_img}
                //   src={advert.gallery[0]} alt={advert.name}
                src="https://ftp.goit.study/img/campers-test-task/8-3.webp"
                alt="name"
                width={290}
              />
            </li>
          </ul>
          <p className={style.modal_descr}>
            {/* {advert.description} */}
            Embrace simplicity and freedom with the Mavericks panel truck, an
            ideal choice for solo travelers or couples seeking a compact and
            efficient way to explore the open roads. This no-frills yet reliable
            panel truck offers the essentials for a comfortable journey, making
            it the perfect companion for those who value simplicity and
            functionality.
          </p>
        </div>

        <div className={css.advert_details}>
          <NavLink
            className={`${css.advert_details_link} ${css.row_accent} ${css.current}`}
            //   to={`features`} state={location.state}
          >
            Features
          </NavLink>
          <NavLink
            className={css.advert_details_link}

            //   to={`reviews`} state={location.state}
          >
            Reviews
          </NavLink>
        </div>
      </div>
      {/* {children} */}
    </div>,
    modalRoot
  );
};

export default Modal;
