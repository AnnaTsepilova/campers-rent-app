import { useEffect } from 'react';

import AdvertsList from 'components/AdvertsList/AdvertsList';
import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
import css from './CatalogPage.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from '../../redux/operations';
import {
  filteredAdvertsSelector,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';
import Section from 'components/Section/Section';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const allAdverts = useSelector(filteredAdvertsSelector);

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  return (
    <main>
      <Section>
        <div className={css.catalogPage_wrapper}>
          <SearchBar />
          {isLoading && !error ? (
            <Loader />
          ) : (
            <AdvertsList allAdverts={allAdverts} />
          )}
        </div>
      </Section>
    </main>
  );
};

export default CatalogPage;
