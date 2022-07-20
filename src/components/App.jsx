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

export const App = () => {
  const [query, setQuery] = useState('');
  const [darkTheme, setDarkTheme] = useState(false);

  const handleSearch = search => {
    setQuery(search);
  };

  const toggleDarkTheme = () => setDarkTheme(dark => !dark);

  return (
    <Main className={darkTheme && css.darktheme}>
      <ControlSection handleDarkTheme={toggleDarkTheme} />
      <SectionWrapper>
        <Routes>
          <Route index element={<StartImage />} />
          <Route
            path="/"
            element={
              <>
                <HeaderForm onBreedSearch={handleSearch} />
                <Outlet />
              </>
            }
          >
            <Route path="breeds" element={<BreedsPanel />} />
            <Route path="breeds/:breedId" element={<BreedInfo />} />
            <Route path="gallery" element={<GalleryPanel />} />
            <Route path="voting" element={<VotingPanel />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        {/* {mode !== 'start' && <HeaderForm onBreedSearch={handleSearch} />}
          {mode === 'start' && (
            <StartImage />
          )} 
          {mode === 'breeds' && currentBreed === '' && (
            <BreedsPanel onImageClick={handleBreedClick} />
          )}
          {mode === 'breeds' && currentBreed !== '' && (
            <BreedInfo breedId={currentBreed} />
          )}*/}
        {/* {items.length > 0 && (
          <Gallery items={items} handleClick={handleClick} />
        )} */}
      </SectionWrapper>
    </Main>
  );
};
