import styled from 'styled-components';

export const GalleryList = styled.ul`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  align-content: stretch;
  /* justify-content: flex-start; */
  gap: 10px;
  padding: 10px 0;
  margin: 0;
  list-style: none;
  width: calc(100% - 32px);
  height: calc(100% - 160px);
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

export const TailPlaceholder = styled.div`
  width: auto;
  flex-grow: 100;
  margin-right: auto;
`;
