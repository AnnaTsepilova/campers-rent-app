import css from './SearchBar.module.css';
import svgSprite from '../../img/icons.svg';

import { SubmitButton } from 'components/Button/Button';

const SearchBar = () => {
  return (
    <>
      <form
        className={css.searchBar_wrapper}
        //   onSubmit={onHandleSubmit}
      >
        <div className={css.location_wrapper}>
          <label className={css.label} htmlFor="location">
            Location
          </label>
          <div className={css.locationInput_wrapper}>
            <input
              className={css.location_input}
              type="text"
              name="location"
              id="location"
              autoComplete="off"
              placeholder="City"
            />
            <svg className={css.location_svg} width={18} height={20}>
              <use href={`${svgSprite}#map-pin`}></use>
            </svg>
          </div>
        </div>
        <div className={css.filters_wrapper}>
          <label className={css.label} htmlFor="">
            Filters
          </label>
        </div>
        <SubmitButton type="submit">Search</SubmitButton>
      </form>
    </>
  );
};

export default SearchBar;
