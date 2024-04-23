import { useEffect } from 'react';

import AdvertsList from 'components/AdvertsList/AdvertsList';
import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
import css from './CatalogPage.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from '../../redux/operations';
import { selectError, selectIsLoading } from '../../redux/selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  return (
    <main className={css.catalogPage_wrapper}>
      {/* <h1>Catalog</h1> */}
      <SearchBar />
      {isLoading && !error ? <Loader /> : <AdvertsList />}
    </main>
  );
};

export default CatalogPage;
