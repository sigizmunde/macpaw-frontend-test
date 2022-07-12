import { fetchDogImages } from 'api-service/api';
import React, { useState } from 'react';
import { Main, SectionWrapper } from './SectionWrapper/SectionWrapper';
import Gallery from './Gallery/Gallery';
import Logo from './Logo/Logo';
import ControlSection from './ControlSection/ControlSection';

export const App = () => {
  const [items, setItems] = useState([]);

  const loadData = () => {
    fetchDogImages().then(data => setItems(data));
  };

  const handleClick = id => {
    this.setState({ activeId: id });
  };

  return (
    <Main>
      <SectionWrapper>
        <Logo />
        <ControlSection />
      </SectionWrapper>
      <SectionWrapper>
        React test task
        <button type="button" onClick={loadData}>
          Load
        </button>
        {items.length > 0 && (
          <Gallery items={items} handleClick={handleClick} />
        )}
      </SectionWrapper>
    </Main>
  );
};
