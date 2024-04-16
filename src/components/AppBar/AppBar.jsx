import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'catalog', text: 'Catalog' },
  { href: 'favorites', text: 'Favorites' },
];

const AppBar = () => {
  return (
    <header className={css.header_container}>
      <div className={css.nav_wrapper}>
        <nav>
          <ul className={css.head_navList}>
            {navItems.map(({ href, text }) => (
              <li className={css.head_navItem} key={href}>
                <NavLink className={css.head_navLink} reloadDocument to={href}>
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppBar;
