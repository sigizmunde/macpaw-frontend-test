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
  display: block;
  position: relative;
  overflow: hidden;
  :hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: var(--accent-overlay);
  }
  :hover::after {
    content: '${prop => prop.hoverContent}';
    position: absolute;
    z-index: 2;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 20px);
    height: 34px;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: var(--accent-color);
    background-color: var(--panel-back-color);
  }
`;

export const Img = styled.img`
  display: block;
  position: relative;
`;
