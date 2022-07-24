import { SectionWrapper } from 'components/SectionWrapper/SectionWrapper';
import { PanelBtn } from 'components/StyledBlocks/StyledBlocks';
import { maxMobile, maxTablet } from 'components/utility/breakpoints';
import styled from 'styled-components';

export const ControlWrapper = styled(SectionWrapper)`
  display: none;
  position: relative;
  @media screen and (max-width: ${maxTablet}px) {
    display: block;
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--back-color);
  }
`;

export const Section = styled.section`
  width: 446px;
  margin: 0 auto;
  padding: 50px 0 0;
  @media screen and (max-width: ${maxTablet}px) {
    padding: 50px 20px;
  }
  @media screen and (max-width: ${maxMobile}px) {
    width: 100%;
  }
`;

export const DarkLightButton = styled.button`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-width: 40px;
  height: 40px;
  border: none;
  border-radius: 10px;
  font-size: 24px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--inverted-text-color);
  background-color: var(--accent-color);
  :hover {
    color: var(--accent-color);
    background-color: var(--faded-accent-color);
  }
  :active {
    color: var(--accent-color);
    background-color: var(--panel-back-color);
  }
  ::before {
    content: var(--theme-icon);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const CloseBtn = styled(PanelBtn)`
  position: absolute;
  top: 40px;
  right: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
