import styled from 'styled-components';

export const SectionWrapper = styled.div`
  width: 50%;
  height: 100%;
  min-width: 512px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: stretch;
  gap: 0;
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
  margin: 0 auto;
  overflow: hidden;
`;
