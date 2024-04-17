import css from './AdvertItem.module.css';
import svgSprite from '../../img/icons.svg';
import { Button } from 'components/Button/Button';
import { CutText, CutTitle } from 'components/CutText/CutText';

const AdvertItem = ({ advert }) => {
  return (
    <li className={css.advertItem_container}>
      <img src={advert.gallery[0]} alt={advert.name} width={290} />

      <div className={css.advert_info}>
        <div>
          <div className={css.advert_title}>
            <CutTitle>{advert.name}</CutTitle>
            <div className={css.price_heart_wrapper}>
              <p>&#8364;{advert.price}</p>
              <svg width={24} height={24}>
                <use href={`${svgSprite}#heart`}></use>
              </svg>
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
        <ul className={css.categories_list}>
          <li className={css.categories_item}>
            <svg width={20} height={20}>
              <use href={`${svgSprite}#users`}></use>
            </svg>
            <p className={css.categories_name}>{advert.adults} adults</p>
          </li>
          <li className={css.categories_item}>
            <svg width={20} height={20}>
              <use href={`${svgSprite}#auto`}></use>
            </svg>
            <p className={css.categories_name}>Automatic</p>
          </li>
          <li className={css.categories_item}>
            <svg width={20} height={20}>
              <use href={`${svgSprite}#petrol`}></use>
            </svg>
            <p className={css.categories_name}>Petrol</p>
          </li>

          <li className={css.categories_item}>
            <svg width={20} height={20}>
              <use href={`${svgSprite}#kitchen`}></use>
            </svg>
            <p className={css.categories_name}>Kitchen</p>
          </li>

          <li className={css.categories_item}>
            <svg width={20} height={20}>
              <use href={`${svgSprite}#bed`}></use>
            </svg>
            <p className={css.categories_name}>{advert.details.beds} beds</p>
          </li>
        </ul>
        <Button>Show more</Button>
      </div>
    </li>
  );
};

export default AdvertItem;
