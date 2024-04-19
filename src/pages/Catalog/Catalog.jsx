import { useEffect } from 'react';

import AdvertsList from 'components/AdvertsList/AdvertsList';
import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
import css from './Catalog.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from '../../redux/operations';
import { selectError, selectIsLoading } from '../../redux/selectors';

const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  return (
    <main className={css.catalogPage_wrapper}>
      {isLoading && !error ? (
        <>
          <SearchBar />
          <Loader />
        </>
      ) : (
        <>
          <SearchBar />
          <AdvertsList />
        </>
      )}
    </main>
  );
};

export default Catalog;
