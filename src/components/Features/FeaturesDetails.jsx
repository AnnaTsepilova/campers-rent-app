import css from '../AdvertItem/AdvertItem.module.css';
import svgSprite from '../../img/icons.svg';

const FeatureItem = ({ advert }) => {
  return (
    <>
      {Object.keys(advert.details).map(key => {
        let keyText = key;
        let value = advert.details[key];
        let valueText = value;
        if (key === 'airConditioner') {
          keyText = 'air conditioner';
        }
        if ((key !== 'beds') & (key !== 'hob')) {
          valueText = '';
        }
        if (value) {
          return (
            <li className={css.features_item} key={key}>
              <svg width={20} height={20}>
                <use href={`${svgSprite}#${key}`}></use>
              </svg>
              <p className={css.features_name}>
                {valueText} {keyText}
              </p>
            </li>
          );
        } else return <></>;
      })}
    </>
  );
};

export default FeatureItem;
