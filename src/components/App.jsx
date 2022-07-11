import { fetchDogImages } from 'api-service/api';
import React from 'react';
import Gallery from './Gallery/Gallery';

export class App extends React.Component {
  state = {
    items: [],
  };

  loadData = () => {
    fetchDogImages().then(data => this.setState({ items: data }));
  };

  handleClick = id => {
    this.setState({ activeId: id });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        React test task
        <button type="button" onClick={this.loadData}>
          Load
        </button>
        {items.length > 0 && (
          <Gallery items={items} handleClick={this.handleClick} />
        )}
      </div>
    );
  }
}
