import { useSelector } from 'react-redux';

import AdvertItem from 'components/AdvertItem/AdvertItem';
import { LoadMoreBtn } from 'components/Button/Button';
import css from './AdvertsList.module.css';

import { selectAdverts } from '../../redux/selectors';
import { useState, useEffect } from 'react';

const AdvertsList = () => {
  const allAdverts = useSelector(selectAdverts);
  const [advertsLimited, setAdvertsLimited] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const advertsPerPage = 4;

  useEffect(() => {
    function fetchData() {
      setAdvertsLimited(allAdverts.slice(0, advertsPerPage));
    }
    fetchData();
  }, [allAdverts]);

  function handleClickLoadMore() {
    const loadMoreAcc = advertsLimited.length + advertsPerPage;
    setAdvertsLimited(allAdverts.slice(0, loadMoreAcc));
    setShowLoadMore(!(loadMoreAcc >= allAdverts.length));
  }

  return (
    <div>
      <ul className={css.AdvertsList}>
        {advertsLimited?.map(advert => {
          return <AdvertItem key={advert._id} advert={advert} />;
        })}
      </ul>
      {showLoadMore && <LoadMoreBtn onClick={handleClickLoadMore} />}
    </div>
  );
};

export default AdvertsList;
