import styled from 'styled-components';

export const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px 0;
  margin: 0;
  list-style: none;
  height: 80%;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0.3em;
  }
  ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--faded-accent-color);
    outline: none;
  }
`;
