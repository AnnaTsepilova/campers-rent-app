import { NavLink } from 'react-router-dom';

import Modal from './Modal';
import css from './ModalAdvert.module.css';
import style from '../AdvertItem/AdvertItem.module.css';
import svgSprite from '../../img/icons.svg';

const ModalAdvert = ({ advert, onModalClose }) => {
  return (
    <Modal onModalClose={onModalClose}>
      <div className={css.modal_window}>
        <button
          className={css.modal_close_btn}
          type="button"
          onClick={onModalClose}
        >
          <svg className={css.modal_close_icon} width={32} height={32}>
            <use href={`${svgSprite}#close-btn`}></use>
          </svg>
        </button>

        <div className={css.advert_info}>
          <div className={css.advert_title}>
            <h3 className={css.advert_name}>{advert.name}</h3>
            <div className={style.advert_subtitle}>
              <div className={style.advert_reviews}>
                <svg width={16} height={16}>
                  <use href={`${svgSprite}#star`}></use>
                </svg>
                <p>
                  {advert.rating}({advert.reviews.length}
                  Reviews)
                </p>
              </div>
              <div className={style.advert_location}>
                <svg width={16} height={16}>
                  <use href={`${svgSprite}#map-pin`}></use>
                </svg>
                <p>{advert.location}</p>
              </div>
            </div>
            <div className={css.advert_price}>
              <p>
                &#8364;
                {advert.price}
              </p>
            </div>
          </div>
          <ul className={style.advertItem_gallery}>
            {advert.gallery.map(imgUrl => (
              <li key={imgUrl}>
                <img
                  className={style.advertItem_img}
                  src={imgUrl}
                  alt={advert.name}
                  width={290}
                  height={310}
                />
              </li>
            ))}
          </ul>
          <p className={style.modal_descr}>{advert.description}</p>
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
    </Modal>
  );
};

export default ModalAdvert;
