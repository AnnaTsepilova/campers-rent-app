import css from './SearchBar.module.css';

import FilterLocation from 'components/FilterLocation/FilterLocation';
import Filters from 'components/Filters/Filters';

const SearchBar = () => {
  return (
    <>
      <div className={css.searchBar_wrapper}>
        <FilterLocation />
        <Filters />
      </div>
    </>
  );
};

export default SearchBar;
