import { SectionWrapper } from 'components/SectionWrapper/SectionWrapper';
import { Panel } from 'components/StyledBlocks/StyledBlocks';
import { maxTablet } from 'components/utility/breakpoints';
import styled from 'styled-components';

export const StartSectionWrapper = styled(SectionWrapper)`
  @media screen and (max-width: ${maxTablet}px) {
    display: none;
  }
`;

export const StartPanel = styled(Panel)`
  margin: 10px;
  height: 100%;
  padding: 0;
  overflow: visible;
  width: calc(100% - 20px);
  background-color: var(--faded-accent-color);
  /* @media screen and (max-width: ${maxTablet}px) {
    display: none;
  } */
`;

export const StartImg = styled.img`
  position: relative;
  width: 100%;
  transform: scale(110%);
`;
