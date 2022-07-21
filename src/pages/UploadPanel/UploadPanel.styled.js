import { Btn, Panel, TextBtn } from 'components/StyledBlocks/StyledBlocks';
import styled from 'styled-components';
import FileIcon from 'images/icons/upload-file-icon.svg';

export const CloseBtn = styled(Btn)`
  width: 40px;
  height: 40px;
  color: var(--accent-color);
  background-color: var(--panel-back-color);
  :hover {
    background-color: var(--faded-accent-color);
  }
  :active {
    color: var(--inverted-text-color);
    background-color: var(--accent-color);
  }
`;

export const ModalContentPanel = styled(Panel)`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  height: 100%;
  text-align: center;
  color: var(--secondary-text-color);
  background-color: var(--back-color);
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  > p {
    margin-top: 0px;
    margin-bottom: 20px;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000077;
`;

export const PanelTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 52px;
  color: var(--main-text-color);
  margin-bottom: 10px;
`;

export const ExtLink = styled.a`
  text-decoration: none;
  color: var(--accent-color);
  :hover {
    color: var(--main-text-color);
  }
`;

export const DropFileArea = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 320px;
  margin-bottom: 20px;
  border: 2px dashed var(--faded-accent-color);
  border-radius: 20px;
  background-color: var(--panel-back-color);
  background-image: url(${FileIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 200px 200px;
  cursor: pointer;
  overflow: hidden;
  &.error {
    background-color: var(--faded-accent-color);
    border: 2px dashed var(--accent-color);
  }
  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    > span {
      color: var(--main-text-color);
    }
  }
`;

export const LoadedImg = styled.img`
  display: block;
  position: absolute;
  z-index: 10;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90%;
`;

export const UploadBtn = styled(TextBtn)`
  width: auto;
  padding: 12px 30px;
  margin: 0 auto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 2px;
`;

export const MessagePanel = styled(Panel)`
  display: flex;
  align-items: center;
  gap: 10px;
  height: auto;
  padding: 20px;
  text-align: start;
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
