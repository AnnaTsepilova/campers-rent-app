import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <section>
        <div className={css.hero_img}>
          <div className="container">
            <div className={css.hero_content}>
              <h1 className={css.hero_title}>Discover Easy Travel</h1>
              <p className={`${css.hero_subtitle} `}>
                More than 500 camping vehicles are now available in Ukraine
              </p>

              <Link to="/catalog" className={css.hero_search_btn}>
                Search now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={`${css.home_content_wrapper} container`}>
          <div className={`${css.home_content_title} subtitle_h2`}>
            <h2 className={`subtitle_h2`}>Welcome to Escape Camper Vans!</h2>
            <h3 className={`subtitle_h4`}>
              YOUR CAMPER RENTAL COMPANY IN UKRAUNE
            </h3>
          </div>
          <div className={css.home_content_text}>
            <div className={css.content_column}>
              <p className={`${css.home_content} text`}>
                We enable the possibility to you to go on an adventurous
                vacation with a rental camper for an affordable price and with
                the best offers.
              </p>

              <p className={`${css.home_content} text`}>
                Come and try us… fair - easy - safe, that is our philosophy!
              </p>
            </div>
            <div className={css.content_column}>
              <p className={`${css.home_content} text`}>
                As a throughout Ukraine operating camper rental company, we
                offer the right motorhome and camper for everyone; whether
                practical overcabs, sleek semi-integrated or luxurious
                fully-integrated motorhomes, all of our vehicles are in top
                condition at all times.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
