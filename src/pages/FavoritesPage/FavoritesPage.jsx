import { useEffect } from 'react';

import css from '../CatalogPage/CatalogPage.module.css';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';

import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/selectors';
import { getAdverts } from '../../redux/operations';
import Section from 'components/Section/Section';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  return (
    <main className={css.catalogPage_wrapper}>
      <Section>
        <div className={css.catalogPage_wrapper}>
          <SearchBar />
          {isLoading && !error ? <Loader /> : <AdvertsList />}
        </div>
      </Section>
    </main>
  );
};

export default FavoritesPage;
