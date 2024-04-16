import { useSelector } from 'react-redux';

import AdvertItem from 'components/AdvertItem/AdvertItem';
import css from './AdvertsList.module.css';
import { selectAdverts } from '../../redux/selectors';

const AdvertsList = () => {
  const adverts = useSelector(selectAdverts);

  console.log('adverts :>> ', adverts);

  return (
    <ul className={css.AdvertsList}>
      {adverts.map(advert => {
        //console.log('advert :>> ', advert);
        return <AdvertItem key={advert._id} advert={advert} />;
      })}
      {/* {showLoadMore && <LoadMore onClick={handleClickLoadMore} />} */}

      <AdvertItem />
    </ul>
  );
};

export default AdvertsList;
