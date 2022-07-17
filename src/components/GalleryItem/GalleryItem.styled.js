import styled from 'styled-components';

export const GalleryLi = styled.li`
  display: block;
  flex-grow: ${p => p.widthKoef};
  width: auto;
  height: 150px;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  > div {
    height: 100%;
    width: 100%;
  }
  img {
    height: 100%;
    border-radius: 10px;
  }
`;
