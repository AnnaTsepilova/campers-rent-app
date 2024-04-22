import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import AdvertItem from 'components/AdvertItem/AdvertItem';
import { LoadMoreBtn } from 'components/Button/Button';
import ModalAdvert from 'components/Modal/ModalAdvert';
import css from './AdvertsList.module.css';

import { selectAdverts } from '../../redux/selectors';

const AdvertsList = () => {
  const allAdverts = useSelector(selectAdverts);
  const [advertsLimited, setAdvertsLimited] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentAdvert, setCurrentAdvert] = useState(false);

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

  function toggleShowModal(currentAdvert) {
    setShowModal(!showModal);
    setCurrentAdvert(currentAdvert);
  }

  function handleModalClose(params) {
    setShowModal(false);
  }

  return (
    <>
      <div className={css.advertsList_wrapper}>
        <ul className={css.advertsList}>
          {advertsLimited ? (
            advertsLimited.map(advert => {
              return (
                <AdvertItem
                  key={advert._id}
                  advert={advert}
                  toggleShowModal={toggleShowModal}
                />
              );
            })
          ) : (
            <p>There are no campers for your request</p>
          )}
        </ul>
        {showLoadMore && <LoadMoreBtn onClick={handleClickLoadMore} />}
      </div>
      {showModal && (
        <ModalAdvert advert={currentAdvert} onModalClose={handleModalClose} />
      )}
    </>
  );
};

export default AdvertsList;