// import { useEffect, useState } from 'react';
// import { createPortal } from 'react-dom';

import css from './ModalAdvert.module.css';
// import svgSprite from '../../img/icons.svg';
import AdvertItem from 'components/AdvertItem/AdvertItem';

// const modalRoot = document.querySelector('#modal-root');

const ModalAdvert = ({ advert }) => {
  return (
    <div className={css.modalBackdrop}>
      <div className={css.modalContent}>
        <AdvertItem />
      </div>
    </div>
  );
};

export default ModalAdvert;

// return createPortal(
//   <div className={css.modalBackdrop}>
//     <div className={css.modalContent}>
//       <p>advert detales</p>
//     </div>
//   </div>,
//   modalRoot
// );
