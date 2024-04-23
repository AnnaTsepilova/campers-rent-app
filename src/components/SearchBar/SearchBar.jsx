import css from './SearchBar.module.css';
import svgSprite from '../../img/icons.svg';

import { SubmitButton } from 'components/Button/Button';

const SearchBar = ({ searchQuery, filterByLocation }) => {
  const onLocationChange = event => {
    console.log('Location event.target.value :>> ', event.target.value);
    filterByLocation(event.target.value);
  };

  return (
    <>
      <div className={css.searchBar_wrapper}>
        <div className={css.location_wrapper}>
          <label className={css.label} htmlFor="location">
            Location
          </label>
          <div className={css.locationInput_wrapper}>
            <input
              className={css.location_input}
              name="location"
              type="text"
              autoComplete="off"
              placeholder="City"
              value={searchQuery}
              onChange={onLocationChange}
            />
            <svg className={css.location_svg} width={18} height={20}>
              <use href={`${svgSprite}#map-pin`}></use>
            </svg>
          </div>
        </div>
        <form
        // className={css.searchBar_wrapper}
        //   onSubmit={onHandleSubmit}
        >
          <div className={css.filters_wrapper}>
            <label className={css.label} htmlFor="">
              Filters
            </label>
          </div>
          <SubmitButton type="submit">Search</SubmitButton>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
