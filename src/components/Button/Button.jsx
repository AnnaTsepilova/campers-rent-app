import { Link } from 'react-router-dom';
import css from './Button.module.css';

export const Button = ({ children }) => {
  return <Link className={css.primary_btn}>{children}</Link>;
};

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={css.loadMore_btn} type="button" onClick={onClick}>
      Load more
    </button>
  );
};
