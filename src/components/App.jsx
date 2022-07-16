import { fetchDogImages } from 'api-service/api';
import React, { useState } from 'react';
import { Main, SectionWrapper } from './SectionWrapper/SectionWrapper';
import Gallery from './Gallery/Gallery';
import Logo from './Logo/Logo';
import ControlSection from './ControlSection/ControlSection';
import StartImage from './StartImage/StartImage';

export const App = () => {
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [mode, setMode] = useState('start');

  const loadData = () => {
    fetchDogImages().then(data => setItems(data));
  };

  const handleClick = id => {
    this.setActiveId(id);
  };

  const changeMode = mode => {
    setMode(mode);
  };

  return (
    <Main>
      <SectionWrapper>
        <Logo onClick={() => changeMode('start')} />
        <ControlSection onClick={changeMode} />
      </SectionWrapper>
      <SectionWrapper>
        {mode === 'start' && (
          <StartImage />
          // <>
          //   React test task
          //   <button type="button" onClick={loadData}>
          //     Load
          //   </button>
          // </>
        )}
        {items.length > 0 && (
          <Gallery items={items} handleClick={handleClick} />
        )}
      </SectionWrapper>
    </Main>
  );
};
