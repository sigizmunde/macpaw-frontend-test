import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import { Main, SectionWrapper } from './SectionWrapper/SectionWrapper';
import ControlSection from './ControlSection/ControlSection';
import StartImage from './StartImage/StartImage';
import HeaderForm from './HeaderForm/HeaderForm';
import BreedsPanel from '../pages/BreedsPanel/BreedsPanel';
import BreedInfo from '../pages/BreedInfo/BreedInfo';
import NotFound from './NotFound/NotFound';

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
          <Route path="/" element={<StartImage />} />
          <Route
            path="/breeds"
            element={
              <>
                <HeaderForm onBreedSearch={handleSearch} />
                <BreedsPanel />
              </>
            }
          />
          <Route
            path="/breeds/:breedId"
            element={
              <>
                <HeaderForm onBreedSearch={handleSearch} />
                <BreedInfo />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
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
