import { Scrollbars } from 'rc-scrollbars';
import { useState } from 'react';

import Modal from './Modal';
import css from './ModalAdvert.module.css';
import style from '../AdvertItem/AdvertItem.module.css';
import svgSprite from '../../img/icons.svg';

import Features from 'components/Features/Features';
import Reviews from 'components/Reviews/Reviews';

const ModalAdvert = ({ advert, onModalClose }) => {
  const [btnActive, setBtnActive] = useState('features');

  console.log('advert :>> ', advert);
  return (
    <Modal onModalClose={onModalClose}>
      <div className={`${css.modal_window} `}>
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
            <h2 className={css.advert_name}>{advert.name}</h2>
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

        <div className={css.advert_details_btns}>
          <button
            className={`${css.advert_details_btn} ${
              btnActive === 'features' ? css.row_accent : ''
            }`}
            onClick={() => setBtnActive('features')}
          >
            Features
          </button>
          <button
            className={`${css.advert_details_btn} ${
              btnActive === 'rewiews' ? css.row_accent : ''
            }`}
            onClick={() => setBtnActive('rewiews')}
          >
            Reviews
          </button>
        </div>
        <div className={css.advert_details_wrapper}>
          {btnActive === 'features' ? <Features advert={advert} /> : <></>}
          {btnActive === 'rewiews' ? (
            <Reviews reviews={advert.reviews} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ModalAdvert;
