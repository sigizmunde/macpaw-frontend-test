import { maxMobile, maxTablet } from 'components/utility/breakpoints';
import styled from 'styled-components';

export const SectionWrapper = styled.div`
  width: 50%;
  height: 100%;
  /* min-width: 490px; */
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: stretch;
  gap: 0;
  @media screen and (max-width: ${maxTablet}px) {
    position: relative;
    z-index: 1;
    width: 100%;
    min-width: 0;
    background-color: var(--back-color);
  }
`;

export const Main = styled.main`
  display: flex;
  flex-basis: auto;
  gap: 0;
  padding: 20px;
  background-color: var(--back-color);
  color: var(--main-text-color);
  height: 100vh;
  max-width: 1400px;
  padding: 10px;
  margin: 0 auto;
  overflow: hidden;
  @media screen and (max-width: ${maxMobile}px) {
    width: 100%;
    height: 100vh;
  }
`;
