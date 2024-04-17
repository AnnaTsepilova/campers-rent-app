import AdvertsList from 'components/AdvertsList/AdvertsList';
import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
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

  return <main>{isLoading && !error ? <Loader /> : <AdvertsList />}</main>;
};

export default Catalog;
