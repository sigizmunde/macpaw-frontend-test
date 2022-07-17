import { fetchDogImages } from 'api-service/api';
import React, { createContext, useContext, useState } from 'react';
import css from './App.module.css';
import { Main, SectionWrapper } from './SectionWrapper/SectionWrapper';
import Gallery from './Gallery/Gallery';
import Logo from './Logo/Logo';
import ControlSection from './ControlSection/ControlSection';
import StartImage from './StartImage/StartImage';
import HeaderForm from './HeaderForm/HeaderForm';
import BreedsPanel from './BreedsPanel/BreedsPanel';
import BreedInfo from './BreedInfo/BreedInfo';
import { useEffect } from 'react';

const modeContext = createContext('start');

export const useModeContext = () => useContext(modeContext);

export const App = () => {
  const [query, setQuery] = useState('');
  const [mode, setMode] = useState('start');
  const [darkTheme, setDarkTheme] = useState(false);
  const [currentBreed, setCurrentBreed] = useState('');

  useEffect(() => {
    setCurrentBreed('');
  }, [mode]);

  const handleBreedClick = id => {
    setCurrentBreed(id);
  };

  const changeMode = mode => {
    setMode(mode);
  };

  const handleSearch = search => {
    setQuery(search);
  };

  const toggleDarkTheme = () => setDarkTheme(dark => !dark);

  return (
    <modeContext.Provider value={{ mode, setMode }}>
      <Main className={darkTheme && css.darktheme}>
        <ControlSection
          onClick={changeMode}
          handleDarkTheme={toggleDarkTheme}
        />
        <SectionWrapper>
          {mode !== 'start' && <HeaderForm onBreedSearch={handleSearch} />}
          {mode === 'start' && (
            <StartImage />
            // <>
            //   React test task
            //   <button type="button" onClick={loadData}>
            //     Load
            //   </button>
            // </>
          )}
          {mode === 'breeds' && currentBreed === '' && (
            <BreedsPanel onImageClick={handleBreedClick} />
          )}
          {mode === 'breeds' && currentBreed !== '' && (
            <BreedInfo breedId={currentBreed} />
          )}
          {/* {items.length > 0 && (
          <Gallery items={items} handleClick={handleClick} />
        )} */}
        </SectionWrapper>
      </Main>
    </modeContext.Provider>
  );
};
