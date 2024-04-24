import { Navigate, Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage/HomePage';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';

import Layout from 'components/Layout/Layout';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
