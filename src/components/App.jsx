import { fetchDogImages } from 'api-service/api';
import React, { useState } from 'react';
import Gallery from './Gallery/Gallery';

export const App = () => {
  const [items, setItems] = useState([]);

  const loadData = () => {
    fetchDogImages().then(data => setItems(data));
  };

  const handleClick = id => {
    this.setState({ activeId: id });
  };

  return (
    <div>
      React test task
      <button type="button" onClick={loadData}>
        Load
      </button>
      {items.length > 0 && <Gallery items={items} handleClick={handleClick} />}
    </div>
  );
};
