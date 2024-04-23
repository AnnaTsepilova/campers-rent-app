import css from './Filters.module.css';
import styles from '../SearchBar/SearchBar.module.css';
import cssTitle from '../Features/Features.module.css';
import svgSprite from '../../img/icons.svg';

import { SubmitButton } from 'components/Button/Button';

const Filters = () => {
  function onHandleSubmit() {}

  return (
    <form onSubmit={onHandleSubmit}>
      <div className={css.filters_wrapper}>
        <p className={`${styles.label} ${css.filters_title}`}>Filters</p>
        <h3
          className={`${cssTitle.vehicle_title} subtitle_h3 ${css.group_title}`}
        >
          Vehicle equipment
        </h3>
        <fieldset className={css.group_wrapper}>
          <label className={css.equipment_label}>
            <input
              type="checkbox"
              name="equipment"
              value="AC"
              className={css.equipment_input}
            />
            <svg width={32} height={32}>
              <use href={`${svgSprite}#ac`}></use>
            </svg>
            AC
          </label>
          <label className={css.equipment_label}>
            <input
              type="checkbox"
              name="equipment"
              value="automatic"
              className={css.equipment_input}
            />
            <svg width={32} height={32}>
              <use href={`${svgSprite}#automatic`}></use>
            </svg>
            Automatic
          </label>
          <label className={css.equipment_label}>
            <input
              type="checkbox"
              name="equipment"
              value="kitchen"
              className={css.equipment_input}
            />
            <svg width={32} height={32}>
              <use href={`${svgSprite}#kitchen`}></use>
            </svg>
            Kitchen
          </label>
          <label className={css.equipment_label}>
            <input
              type="checkbox"
              name="equipment"
              value="TV"
              className={css.equipment_input}
            />
            <svg width={32} height={32}>
              <use href={`${svgSprite}#tv1`}></use>
            </svg>
            TV
          </label>
          <label className={css.equipment_label}>
            <input
              type="checkbox"
              name="equipment"
              value="Shower/WC"
              className={css.equipment_input}
            />
            <svg width={32} height={32}>
              <use href={`${svgSprite}#shower`}></use>
            </svg>
            Shower/WC
          </label>
        </fieldset>

        <h3
          className={`${cssTitle.vehicle_title} subtitle_h3 ${css.group_title}`}
        >
          Vehicle type
        </h3>
        <fieldset className={css.group_wrapper_type}>
          <label className={css.type_label}>
            <input
              type="radio"
              name="type"
              value="van"
              className={css.type_input}
            />
            <svg width={40} height={28}>
              <use href={`${svgSprite}#van`}></use>
            </svg>
            Van
          </label>
          <label className={css.type_label}>
            <input
              type="radio"
              name="type"
              value="fullyIntegrated"
              className={css.type_input}
            />
            <svg width={40} height={28}>
              <use href={`${svgSprite}#fully-integrated`}></use>
            </svg>
            Fully Integrated
          </label>
          <label className={css.type_label}>
            <input
              type="radio"
              name="type"
              value="alcove"
              className={css.type_input}
            />
            <svg width={40} height={28}>
              <use href={`${svgSprite}#alcove`}></use>
            </svg>
            Alcove
          </label>
        </fieldset>
      </div>
      <SubmitButton type="submit">Search</SubmitButton>
    </form>
  );
};

export default Filters;
