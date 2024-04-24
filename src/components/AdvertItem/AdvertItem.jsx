import css from './AdvertItem.module.css';
import style from '../Features/Features.module.css';
import svgSprite from '../../img/icons.svg';

import { Button } from 'components/Button/Button';
import { CutText, CutTitle } from 'components/CutText/CutText';
import FeaturesInAdvertItem from 'components/Features/FeaturesInAdvertItem';

import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import { addFavorite } from '../../redux/favoritesSlice';

const AdvertItem = ({ advert, toggleShowModal }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  console.log('favorites :>> ', favorites);

  return (
    <li className={css.advertItem_container}>
      <img
        className={css.advertItem_img}
        src={advert.gallery[0]}
        alt={advert.name}
        width={290}
        height={310}
      />

      <div className={css.advert_info}>
        <div>
          <div className={css.advert_title}>
            <CutTitle>{advert.name}</CutTitle>
            <div className={css.price_fav_wrapper}>
              <p>&#8364;{advert.price}</p>
              <button
                type="button"
                className={css.favorites_btn}
                onClick={() => dispatch(addFavorite(advert._id))}
              >
                <svg width={24} height={24}>
                  <use href={`${svgSprite}#heart`}></use>
                </svg>
              </button>
            </div>
          </div>
          <div className={css.advert_subtitle}>
            <div className={css.advert_reviews}>
              <svg width={16} height={16}>
                <use href={`${svgSprite}#star`}></use>
              </svg>
              <p>
                {advert.rating}({advert.reviews.length} Reviews)
              </p>
            </div>
            <div className={css.advert_location}>
              <svg width={16} height={16}>
                <use href={`${svgSprite}#map-pin`}></use>
              </svg>
              <p>{advert.location}</p>
            </div>
          </div>
        </div>
        <CutText>{advert.description}</CutText>
        <ul className={style.features_list}>
          <FeaturesInAdvertItem advert={advert} />
        </ul>
        <Button
          onClick={() => {
            toggleShowModal(advert);
          }}
        >
          Show more
        </Button>
      </div>
    </li>
  );
};

export default AdvertItem;
