import { NavLink } from 'react-router-dom';

import css from './AppBar.module.css';
import svgSprite from '../../img/icons.svg';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'catalog', text: 'Catalog' },
  { href: 'favorites', text: 'Favorites' },
];

const AppBar = () => {
  return (
    <header className={`${css.header_container} container`}>
      <a href="/campers-rent-app" className={css.logo} aria-label="Logo">
        <svg width={32} height={32} className={css.logo_header}>
          <use href={`${svgSprite}#landscape`}></use>
        </svg>
        <div className={css.slogan}>
          <span className={css.slogan_first}>
            Your <span className={css.accent}>best</span>
          </span>
          <span className={css.slogan_second}>
            {' '}
            camper <span className={css.accent}>here</span>
          </span>
        </div>
      </a>
      <nav className={css.nav_wrapper}>
        <ul className={css.head_navList}>
          {navItems.map(({ href, text }) => (
            <li className={css.head_navItem} key={href}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.head_navLink
                }
                reloadDocument
                to={href}
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default AppBar;
