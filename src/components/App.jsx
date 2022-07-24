import React, { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import { Main, SectionWrapper } from './SectionWrapper/SectionWrapper';
import NotFound from './NotFound/NotFound';
import ControlSection from './ControlSection/ControlSection';
import StartImage from './StartImage/StartImage';
import HeaderForm from './HeaderForm/HeaderForm';
import BreedsPanel from '../pages/BreedsPanel/BreedsPanel';
import BreedInfo from '../pages/BreedInfo/BreedInfo';
import GalleryPanel from 'pages/GalleryPanel/GalleryPanel';
import VotingPanel from 'pages/VotingPanel/VotingPanel';
import UploadPanel from 'pages/UploadPanel/UploadPanel';
import CategoryPanel from 'pages/CategoryPanel/CategoryPanel';
import MobileMenu from './MobileMenu/MobileMenu';

export const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleDarkTheme = () => setDarkTheme(dark => !dark);

  return (
    <Main className={darkTheme && css.darktheme}>
      <ControlSection handleDarkTheme={toggleDarkTheme} />

      <Routes>
        <Route index element={<StartImage />} />
        <Route
          path="/"
          element={
            <SectionWrapper>
              <HeaderForm handleShowMenu={setShowMenu} />
              <Outlet />
              {showMenu && (
                <MobileMenu
                  handleDarkTheme={toggleDarkTheme}
                  handleShowMenu={setShowMenu}
                />
              )}
            </SectionWrapper>
          }
        >
          <Route path="breeds" element={<BreedsPanel />} />
          <Route path="breeds/:breedId" element={<BreedInfo />} />
          <Route path="gallery" element={<GalleryPanel />} />
          <Route path="voting" element={<VotingPanel />} />

          <Route path="search" element={<CategoryPanel mode="search" />} />
          <Route path="likes" element={<CategoryPanel mode="likes" />} />
          <Route path="dislikes" element={<CategoryPanel mode="dislikes" />} />
          <Route
            path="favourites"
            element={<CategoryPanel mode="favourites" />}
          />

          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="upload" element={<UploadPanel />} />
      </Routes>
    </Main>
  );
};
